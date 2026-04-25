const mongoose = require('mongoose')

const commitSchema = new mongoose.Schema({
  sha: {
    type: String,
    required: true,
    unique: true
  },
  message: {
    type: String,
    required: true
  },
  repo: {
    type: String,
    required: true
  },
  url: String,
  commitAt: {
    type: Date,
    required: true
  },
  entry: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Entry',
    default: null
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Commit', commitSchema)
