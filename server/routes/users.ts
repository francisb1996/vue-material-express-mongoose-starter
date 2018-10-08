import * as express from 'express'
import User from '../../models/User'
import UserService from '../services/UserService'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const users: User[] = await UserService.getAllUsers()
    res.status(200).send(await UserService.getAllUsers())
  } catch (e) {
    res.status(500).send('Failed to get users')
  }
})

router.get('/:_id', async (req, res) => {
  try {
    const user: User = await UserService.getUserById(req.params._id)
    res.status(200).send(user)
  } catch (e) {
    res.status(404).send(`User ${req.params._id} not found.`)
  }
})

router.post('/', async (req, res) => {
  try {
    const addedUser = await UserService.insertUser(new User(req.body))
    res.status(201).send(addedUser)
  } catch (e) {
    res.status(422).send('Invalid user')
    console.warn(e)
  }
})

router.delete('/:_id', async (req, res) => {
  try {
    await UserService.deleteUserById(req.params._id)
    res.status(204).send()
  } catch (e) {
    res.status(500).send('Failed to remove user')
    console.warn(e)
  }
})

export = router
