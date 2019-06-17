require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 9000

const userApi = require('./apis/user')
const chatApi = require('./apis/chat')

mongoose.connect(
  process.env.DB_CLUSTER_URL,
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },
  () => {
    console.log('Connected to MongoDB Atlas')
  }
)

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api/users', userApi)
app.use('/api/chats', chatApi)

app.listen(port, () => {
  console.log('API server is running')
})
