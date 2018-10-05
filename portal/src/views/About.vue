<template>
  <div class="about">
    <ul>
      <li v-for="(user, index) in users" :key="index"> 
        <span>{{ user.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import UserSerivce from '../services/UserSerivce'

export default {
  data() {
    return ({
      users: UserSerivce.getUsers()
    })
  }
  
}
</script>
