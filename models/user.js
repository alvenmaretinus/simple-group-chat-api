const mongoose = require('mongoose')
const { Schema } = mongoose

const schema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  displayName: { type: String, required: true },
  profilePicUrl: { type: String, required: true },
  createdAt: { type: Date, default: new Date() },
})

const User = mongoose.model('User', schema)

module.exports = User
