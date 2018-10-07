import axios from 'axios'
import User from '../../../models/User'

class UserService {
  async getAll() {
    console.log("hello")
    const res = await axios.get(`/users`)
    return res.data.map((user: any) => new User(user))
  }

  async get(name: string) {
    const res = await axios.get(`/users/${name}`)
    return new User(res.data)
  }

  async add(user: User) {
    const res = await axios.post(`/users`, user)
    return new User(res.data)
  }
}

export default new UserService();