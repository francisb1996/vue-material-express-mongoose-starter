import User from '../../models/User'
import { Collection } from 'mongodb'

export default class UserService {
  private users: Collection

  constructor({ db }) {
    this.users = db.collection('users')
  }

  async getAllUsers(): Promise<User[]> {
    return await this.users.find().toArray()
  }

  async getUserByName(name): Promise<User> {
    console.log(`Getting user ${name}`)
    return await this.users.findOne({ name })
  }

  async insertUser(user): Promise<User> {
    return this.users.insertOne(user).then(res => res.ops[0])
  }
}
