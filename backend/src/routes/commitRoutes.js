const express = require('express')
const router = express.Router()
const {
  syncCommits,
  getCommits,
  linkCommitToEntry
} = require('../controllers/commitController')

router.get('/sync/:username', syncCommits)
router.get('/', getCommits)
router.post('/link', linkCommitToEntry)

module.exports = router
