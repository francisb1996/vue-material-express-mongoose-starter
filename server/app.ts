import * as express from 'express'
import * as mongodb from 'mongodb'
import * as serveStatic from 'serve-static'
import jade from 'jade'
import UserService from './services/UserService'

// Models
import User from '../models/User'

class App {
  public api
  private db
  private port = 8081

  // Define services
  private userService

  constructor () {
    this.connectToDB()
    this.api = express()
    this.api.use(express.json())
    this.api.use(express.urlencoded({ extended: true }));
    this.api.set('view engine', 'jade');
    this.api.use(serveStatic('../portal/dist', { index: 'index.html' }))
    this.mountRoutes()
    this.api.listen(this.port)
    console.info('The server is up and running.')
  }

  private initializeServices() {
    // Initialize services
    this.userService = new UserService({ db: this.db })
  }

  private mountRoutes () {
    const router = express.Router()

    // Routes
    router.get('/users', async (req, res) => {
      try {
        const users: User[] = await this.userService.getAllUsers()
        res.status(200).send(await this.userService.getAllUsers())
      } catch (e) {
        res.status(500).send('Failed to get users')
      }
    })

    router.get('/users/:_id', async (req, res) => {
      try {
        const user: User = await this.userService.getUserById(req.params._id)
        res.status(200).send(user)
      } catch (e) {
        res.status(404).send(`User ${req.params._id} not found.`)
      }
    })

    router.post('/users', async (req, res) => {
      try {
        const addedUser = await this.userService.insertUser(new User(req.body))
        res.status(201).send(addedUser)
      } catch (e) {
        res.status(422).send('Invalid user')
        console.warn(e)
      }
    })

    router.delete('/users/:_id', async (req, res) => {
      try {
        await this.userService.deleteUserById(req.params._id)
        res.status(204).send()
      } catch (e) {
        res.status(500).send('Failed to remove user')
        console.warn(e)
      }
    })

    this.api.use('/', router)
  }

  private async connectToDB() {
    try {
      const client = await mongodb.connect('mongodb://localhost:27017', { useNewUrlParser: true })
      this.db = client.db('test')
      this.initializeServices()
    } catch (e) {
      console.error('Failed to connect to MongoDB!')
      // @ts-ignore
      process.exit(1);
    }
  }
}

export default new App().api
