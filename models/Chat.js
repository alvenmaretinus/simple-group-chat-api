const mongoose = require('mongoose')
const { Schema } = mongoose

const schema = new Schema({
  username: { type: String, required: true, unique: true },
  displayName: { type: String, required: true },
  profilePicUrl: { type: String, required: true },
  message: { type: String, required: true },
  absoluteTimestamp: { type: String, required: true },
  relativeTimestamp: { type: String, required: true },
})

const Chat = mongoose.model('Chat', schema)

module.exports = Chat
