<template>
  <div class="users">
    <ul>
      <li v-for="user in users" :key="user.name"> 
        <span>{{ user.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import UserSerivce from '../services/UserService'

export default {
  data() {
    return ({
      users: this.$store.state.users
    })
  },
  addUser(user) {
    return UserSerivce.add(user)
  }
  
}
</script>
