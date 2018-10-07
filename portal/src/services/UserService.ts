import axios from 'axios'
import User from '../../../models/User'

class UserService {
  async getAll(): Promise<User[]> {
    const res = await axios.get(`/users`)
    return res.data.map((user: any) => new User(user))
  }

  async get(_id: string): Promise<User> {
    const res = await axios.get(`/users/${_id}`)
    return new User(res.data)
  }

  async add(user: User): Promise<User> {
    const res = await axios.post(`/users`, user)
    return new User(res.data)
  }

  async deleteUserById(_id: string): Promise<void> {
    await axios.delete(`/users/${_id}`)
  }
}

export default new UserService();