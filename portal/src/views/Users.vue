<template>
  <v-container fluid class="page">
    <h1>Users</h1>

    <div v-if="error">
      Error!
    </div>

    <div v-if="loading">
      Loading...
    </div>

    <div v-if="!error && !loading">
      <ul>
        <li v-for="user in users" :key="user.name"> 
          <span>{{ user.name }}</span>
        </li>
      </ul>
    </div>
  </v-container>
</template>

<script>
import UserService from '../services/UserService'

export default {
  name: 'Users',
  data() {
    return ({
      loading: true,
      error: null,
      users: []
    })
  },
  create() {
    this.loadUsers()
  },
  async loadUsers() {
    try {
      this.users = await UserSerivce.getAll()
      this.error = null
      this.loading = false
    } catch (e) {
      this.error = e
      this.loading = false
    }
  },
  addUser(user) {
    return UserSerivce.add(user)
  }
  
}
</script>
