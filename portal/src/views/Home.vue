<template>
  <v-container fluid class="page">
    <v-layout column>
      <v-flex xs12 pa-2>
        <v-layout row justify-content-center>
          <v-flex>
            <img contain :src="logo"/>
          </v-flex>
          <v-flex>
            <h1>Home</h1>
            <h2>This is the home page</h2>  
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex xs12>
        This is the body of the home page.
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