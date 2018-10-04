import express from 'express'
import mongoose, {Schema, Model} from 'mongoose'
const app = express()

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  const User = new Model('User', new Schema({
    name: String
  }))
})

app.get('/users', (req, res) => {
  res.send(db.collection('users').find());
})