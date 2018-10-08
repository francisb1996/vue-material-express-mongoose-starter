<template>
  <v-layout>
    <v-flex>
      <v-card class="hello">
        <v-card-title>{{ msg }}</v-card-title>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
export default {
  name: 'HelloWorld',
  data() {
    return({
      msg: 'Hello world!'
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .hello {
    color: blue;
  }
</style>
