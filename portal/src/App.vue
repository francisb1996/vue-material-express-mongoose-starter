<template>
  <v-app>
    <v-navigation-drawer
      :clipped="clipped"
      v-model="drawer"
      disable-resize-watcher
      app>
      <v-list>
        <router-link v-for="(item, i) in items" :key="i" :to="{name: item.route}">
          <v-list-tile @click.stop="drawer = false">
            <v-list-tile-action>
              <v-icon v-html="item.icon"></v-icon>
            </v-list-tile-action>
            <v-list-tile-content text-color="white">
              <v-list-tile-title v-text="item.title"></v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </router-link>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar flat color="primary" app :clipped-left="clipped">
      <v-btn icon @click.stop="drawer = !drawer">
        <v-icon color="white">fas fa-bars</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [
        {
          icon: 'fas fa-home',
          title: 'Home',
          route: 'home'
        },
        {
          icon: 'fas fa-users',
          title: 'Users',
          route: 'users'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>

<style>
  h1, h2 {
    font-weight: normal;
  }

  h1 {
    padding-top: 1rem;
    padding-bottom: 2rem;
  }

  a {
    text-decoration: none
  }

  .page {
    max-width: 1500px !important;
    margin: auto;
  }
</style>
