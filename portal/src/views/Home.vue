<template>
  <v-container fluid class="page">
    <v-layout column>
      <v-flex xs12 mb-2>
        <h1>Home</h1>
        <h2 >This is the home page</h2>  
      </v-flex>
      <v-flex xs12>
        <v-img :src="logo" class="logo"/>
      </v-flex>
      <v-flex xs12 mt-5>
        <v-layout mt-2>
          <v-flex xs3>
            <HelloWorld/>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue'

export default {
  name: 'Home',
  data() {
    return({
      logo: require('../assets/logo.png')
    })
  },
  components: {
    HelloWorld
  }
}
</script>

<style>
  .logo {
    width: 10%;
    margin: auto;
  }
</style>
