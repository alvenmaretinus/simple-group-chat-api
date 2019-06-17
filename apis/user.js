const express = require('express')
const bcrypt = require('bcrypt')
const User = require('../models/User')
const getReadableDate = require('../helpers/getReadableDate')
const router = express.Router()

router.get('/:username?', (req, res) => {
  const { username } = req.params

  if (!username) {
    User.find({}, (err, data) => {
      if (err) {
        res.status(400).send(err.message)
        return
      }
      res.send(data.map(({ _id, username, displayName, profilePicUrl }) => {
        return {
          id: _id,
          username,
          displayName,
          profilePicUrl,
          createdAt: getReadableDate(_id.getTimestamp())
        }
      }))
    })
  } else {
    User.findOne({ username }, (err, data) => {
      if (err) {
        res.status(400).send(err.message)
        return
      }
      if (data) {
        const { _id, username, displayName, profilePicUrl } = data
        res.send({
          id: _id,
          username,
          displayName,
          profilePicUrl,
          createdAt: getReadableDate(_id.getTimestamp())
        })
      } else {
        res.status(422).send('Username does not exist')
      }
    })
  }
})

router.post('/', (req, res) => {
  const { username, password, displayName, profilePicUrl } = req.body
  User.create({
    username,
    password: bcrypt.hashSync(password, 10),
    displayName,
    profilePicUrl
  }, err => {
    if (err) res.status(422).send(err.message)
    else res.send('User successfully created')
  })
})

router.post('/login', (req, res) => {
  const { username, password } = req.body
  User.findOne({ username }, (err, data) => {
    if (err) {
      res.status(400).send(err.message)
      return
    }
    if (data) {
      const { password: hashedPassword } = data
      if (bcrypt.compareSync(password, hashedPassword)) {
        res.send('Login successful')
       } else {
        res.status(401).send('Wrong credentials')
       }
    } else {
      res.status(422).send('Username does not exist')
    }
  })
})

module.exports = router
