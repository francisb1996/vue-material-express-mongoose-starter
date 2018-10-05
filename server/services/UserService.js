class UserService {
  users = db.collection('users')

  getAllUsers() {
    users.find()
  }
  
  getUserByName(name) {
    users.find({name})
  }
  
  insertUser(user) {
    users.insert(user)
  }
}

export default new UserService()