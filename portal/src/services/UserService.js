import axios from 'axios'

const apiAddress = 'http://localhost:8081'

class UserService {
  async getAll() {
    return await axios.get(`${apiAddress}/users`)
  }

  async get(name) {
    return await axios.get(`${apiAddress}/users/${name}`)
  }

  async add(user) {
    return await axios.post(`${apiAddress}/users`, user)
  }
}

export default new UserService();