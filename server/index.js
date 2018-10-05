const express = require('express')
const mongodb = require('mongodb')
const UserController = require('./controllers/UserController')
const app = express()

const db = mongodb.connect('mongodb://localhost:27017/test')

app.use('/', () => {
  console.log('Processing request')
})

console.log('The server is up and running.')