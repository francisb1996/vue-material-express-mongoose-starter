import axios from 'axios'


const apiAddress = 'localhost:8081'

class UserService {
  async getUsers() {
    return await axios.get(`${apiAddress}/users`)
  }

  async getUsersByName(name) {
    return await axios.get(`${apiAddress}/users/${name}`)
  }
}

export default new UserService();