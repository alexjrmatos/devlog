const mongoose = require('mongoose')

const entrySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  content: {
    type: String,
    required: true
  },
  mood: {
    type: String,
    enum: ['ótimo', 'bem', 'neutro', 'cansado', 'frustrado'],
    default: 'neutro'
  },
  tags: [String],
  commits: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Commit'
  }]
}, {
  timestamps: true
})

module.exports = mongoose.model('Entry', entrySchema)
