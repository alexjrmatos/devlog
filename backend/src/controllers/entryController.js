const Entry = require('../models/Entry')
const Commit = require('../models/Commit')

const createEntry = async (req, res) => {
  try {
    const { title, content, mood, tags } = req.body
    const entry = await Entry.create({ title, content, mood, tags })
    res.status(201).json(entry)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const getEntries = async (req, res) => {
  try {
    const entries = await Entry.find()
      .populate('commits')
      .sort({ createdAt: -1 })
    res.json(entries)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const getEntryById = async (req, res) => {
  try {
    const entry = await Entry.findById(req.params.id).populate('commits')
    if (!entry) return res.status(404).json({ error: 'Entrada não encontrada' })
    res.json(entry)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const updateEntry = async (req, res) => {
  try {
    const entry = await Entry.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    )
    if (!entry) return res.status(404).json({ error: 'Entrada não encontrada' })
    res.json(entry)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const deleteEntry = async (req, res) => {
  try {
    const entry = await Entry.findByIdAndDelete(req.params.id)
    if (!entry) return res.status(404).json({ error: 'Entrada não encontrada' })
    res.json({ message: 'Entrada deletada com sucesso' })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

module.exports = { createEntry, getEntries, getEntryById, updateEntry, deleteEntry }
