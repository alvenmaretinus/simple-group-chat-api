const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')
const { Schema } = mongoose

const schema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  displayName: { type: String, required: true },
  profilePicUrl: { type: String, required: true },
})
schema.plugin(uniqueValidator)

const User = mongoose.model('User', schema)

module.exports = User
