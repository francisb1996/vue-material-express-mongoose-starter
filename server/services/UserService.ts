import User from '../../models/User'
import { Collection, ObjectId } from 'mongodb'

export default class UserService {
  private users: Collection

  constructor({ db }) {
    this.users = db.collection('users')
  }

  async getAllUsers(): Promise<User[]> {
    console.log('Getting all users')
    return await this.users.find().toArray()
  }

  async getUserById(_id: string): Promise<User> {
    console.log(`Getting user ${_id}`)
    return await this.users.findOne({ _id })
  }

  async insertUser(user: User): Promise<User> {
    console.log(`Inserting user ${user.name}`)
    return this.users.insertOne(user).then(res => res.ops[0])
  }

  async deleteUserById(_id: string): Promise<void> {
    console.log(`Deleting user ${_id}`)
    this.users.remove({ _id: new ObjectId(_id) })
  }
}
