const Commit = require('../models/Commit')
const Entry = require('../models/Entry')

const syncCommits = async (req, res) => {
  try {
    const { username } = req.params
    const headers = {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      Accept: 'application/vnd.github+json'
    }

    const reposRes = await fetch(
      `https://api.github.com/user/repos?per_page=100&sort=pushed`,
      { headers }
    )
    const repos = await reposRes.json()

    const commits = []
    for (const repo of repos) {
      const commitsRes = await fetch(
        `https://api.github.com/repos/${repo.full_name}/commits?author=${username}&per_page=10`,
        { headers }
      )
      const repoCommits = await commitsRes.json()
      if (!Array.isArray(repoCommits)) continue

      for (const c of repoCommits) {
        const exists = await Commit.findOne({ sha: c.sha })
        if (!exists) {
          const commit = await Commit.create({
            sha: c.sha,
            message: c.commit.message,
            repo: repo.full_name,
            url: c.html_url,
            commitAt: new Date(c.commit.author.date)
          })
          commits.push(commit)
        }
      }
    }

    res.status(201).json({ synced: commits.length, commits })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const getCommits = async (req, res) => {
  try {
    const commits = await Commit.find()
      .populate('entry')
      .sort({ commitAt: -1 })
    res.json(commits)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const linkCommitToEntry = async (req, res) => {
  try {
    const { commitId, entryId } = req.body

    const commit = await Commit.findByIdAndUpdate(
      commitId,
      { entry: entryId },
      { new: true }
    )

    await Entry.findByIdAndUpdate(
      entryId,
      { $addToSet: { commits: commitId } }
    )

    res.json(commit)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

module.exports = { syncCommits, getCommits, linkCommitToEntry }
