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
import store from '../store'

export default {
  data() {
    return ({
      users: store.users
    })
  },
  addUser(user) {
    return user.save()
  }
}
</script>
