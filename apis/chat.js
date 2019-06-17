const express = require('express')
const moment = require('moment')
const Chat = require('../models/Chat')
const User = require('../models/User')
const getReadableDateTime = require('../helpers/getReadableDateTime')
const router = express.Router()

router.get('/', (req, res) => {
  Chat.find({}, (err, data) => {
    if (err) {
      res.status(400).send(err.message)
      return
    }
    res.send(data.map(({ _id, username, displayName, profilePicUrl, message }) => ({
      id: _id,
      username,
      displayName,
      profilePicUrl,
      message,
      absoluteTimestamp: getReadableDateTime(_id.getTimestamp()),
      relativeTimestamp: moment(_id.getTimestamp()).fromNow(),
    })))
  })
})

router.post('/', (req, res) => {
  const { username, message } = req.body

  User.findOne({ username }, (err, data) => {
    if (err) {
      res.status(400).send(err.message)
      return
    }
    if (data) {
      const { username, displayName, profilePicUrl } = data
      Chat.create({
        username,
        displayName,
        profilePicUrl,
        message,
      }, err => {
        if (err) res.status(422).send(err.message)
        else res.send('Message sent successfully')
      })
    } else {
      res.status(422).send('Username does not exist')
    }
  })
})

module.exports = router
