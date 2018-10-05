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
import User from '../models/User'

export default {
  data() {
    return ({
      users: User.find()
    })
  },
  addUser(user) {
    return user.save()
  }
}
</script>
