import * as express from 'express'
import * as bodyParser from "body-parser";
import * as mongodb from 'mongodb'
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
    this.mountRoutes()
    this.api.use(bodyParser.json());
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
    router.get('/users', (req: Request, res) => {
      const users: User[] = this.userService.getAllUsers()
      console.log(users)
      res.status(200).send(users)
    })
    
    router.get('/users/:name', (req, res) => {
      return this.userService.getUserByName(req.params.name)
    })
    
    router.post('/users',  (req, res) => {
      return this.userService.insertUser(req.body)
    })
    this.api.use('/', router)
  }

  private connectToDB() {
    try {
      mongodb.connect('mongodb://localhost:27017', { useNewUrlParser: true })
      .then( client => {
        this.db = client.db('test')
        this.initializeServices()
      })
    } catch (e) {
      console.error('Failed to connect to MongoDB!')
      process.exit(1);
    }
  }
}

export default new App().api
