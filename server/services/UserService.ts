import User from '../../models/User'

export default class UserService {
  private users

  constructor({ db }) {
    this.users = db.collection('users')
  }

  getAllUsers(): User[] {
    return this.users.find()
  }
  
  getUserByName(name): User {
    return this.users.find({name})
  }
  
  insertUser(user): User {
    return this.users.insert(user)
  }
}