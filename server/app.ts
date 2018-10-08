import * as express from 'express'
import * as mongodb from 'mongodb'
import * as serveStatic from 'serve-static'
import * as masterRouter from './routes/index'
import jade from 'jade'
import UserService from './services/UserService'

// Models
import User from '../models/User'

class App {
  public api
  private db
  private port = 8081
  private dbName = 'test'

  // Define services
  private userService

  constructor () {
    this.connectToDB()
    this.api = express()
    this.api.use(express.json())
    this.api.use(express.urlencoded({ extended: true }));
    this.api.set('view engine', 'jade');
    this.api.use(serveStatic('../portal/dist', { index: 'index.html' }))
    this.api.listen(this.port)
    this.api.use('/', masterRouter);
    console.info('The server is up and running.')
  }

  private initializeServices() {
    // Initialize services
    UserService.init({ db: this.db })
  }

  private async connectToDB() {
    try {
      const client = await mongodb.connect('mongodb://localhost:27017', { useNewUrlParser: true })
      this.db = client.db(this.dbName)
      this.initializeServices()
    } catch (e) {
      console.error('Failed to connect to MongoDB!')
      // @ts-ignore
      process.exit(1);
    }
  }
}

export default new App().api
