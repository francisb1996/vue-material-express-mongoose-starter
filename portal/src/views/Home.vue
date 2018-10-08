<template>
  <v-container fluid class="page">
    <v-layout column>
      <v-flex xs12 pa-2>
        <v-layout row justify-content-center mb-2>
          <v-flex justify-center>
            <h1>Home</h1>
            <h2 >This is the home page</h2>  
            <v-img :src="logo" class="logo"/>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return({
      logo: require('../assets/logo.png')
    })
  }
}
</script>

<style>
  .logo {
    width: 10%;
    margin: auto;
  }
</style>
