const BASE_URL = 'http://localhost:3333'

export const api = {
  async getEntries() {
    const res = await fetch(`${BASE_URL}/entries`)
    return res.json()
  },

  async createEntry(data) {
    const res = await fetch(`${BASE_URL}/entries`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    return res.json()
  },

  async getCommits() {
    const res = await fetch(`${BASE_URL}/commits`)
    return res.json()
  },

  async syncCommits(username) {
    const res = await fetch(`${BASE_URL}/commits/sync/${username}`)
    return res.json()
  },

  async linkCommitToEntry(commitId, entryId) {
    const res = await fetch(`${BASE_URL}/commits/link`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ commitId, entryId })
    })
    return res.json()
  }
}
