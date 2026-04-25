const express = require('express')
const router = express.Router()
const {
  createEntry,
  getEntries,
  getEntryById,
  updateEntry,
  deleteEntry
} = require('../controllers/entryController')

router.post('/', createEntry)
router.get('/', getEntries)
router.get('/:id', getEntryById)
router.put('/:id', updateEntry)
router.delete('/:id', deleteEntry)

module.exports = router
