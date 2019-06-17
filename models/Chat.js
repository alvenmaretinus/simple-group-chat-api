const mongoose = require('mongoose')
const { Schema } = mongoose

const schema = new Schema({
  username: { type: String, required: true },
  displayName: { type: String, required: true },
  profilePicUrl: { type: String, required: true },
  message: { type: String, required: true },
})

const Chat = mongoose.model('Chat', schema)

module.exports = Chat
