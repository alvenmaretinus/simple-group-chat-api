require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 9000

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send('hello world')
})

mongoose.connect(
  process.env.DB_CLUSTER_URL,
  { useNewUrlParser: true },
  () => {
    console.log('Connected to MongoDB Atlas')
  }
)

app.listen(port, () => {
  console.log('API server is running')
})
