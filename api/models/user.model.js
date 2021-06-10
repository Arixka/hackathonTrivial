const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'NickName is required']
  }
})

exports.UserModel = mongoose.model('users', userSchema)
