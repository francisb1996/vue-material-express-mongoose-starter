<template>
  <div class="about">
    <ul>
      <li v-for="user in users"> 
        <span>{{ user.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  users: []
}
</script>
