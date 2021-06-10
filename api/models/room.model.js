const mongoose = require('mongoose')

const roomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Room name is required']
  },
  users: [{ type: mongoose.Schema.Types.ObjectId, max: 4 }],
  questions: [mongoose.Schema.Types.ObjectId]
})

exports.roomModel = mongoose.model('room', roomSchema)
