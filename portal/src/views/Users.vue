<template>
  <v-container fluid class="page">
    <v-layout column>
      <v-flex xs12>
        <h1>Users</h1>
      </v-flex>

      <v-flex xs12 v-if="error">
        Error!
      </v-flex>

      <v-flex xs12 v-if="loading">
        Loading...
      </v-flex>

      <v-flex xs12 v-if="!error && !loading">
        <v-layout row>
          <v-flex xs12>
            <v-layout row wrap align-center>
              <v-flex xs12>
                <v-layout row pa-2 align-content-center>
                  <v-flex xs2 pr-2>
                    <v-text-field
                      label="New User"
                      v-model="newUser.name"
                      @keyup.enter="addUser(newUser)"/>
                  </v-flex>
                  <v-flex xs10>
                    <v-btn icon @click="addUser(newUser)" :disabled="!newUser.name">
                      <v-icon color="primary">fas fa-plus</v-icon>
                    </v-btn>
                  </v-flex>
                </v-layout>
              </v-flex>
              <v-flex xs6 sm4 md2 pa-2 v-for="(user, i) in users" :key="i"> 
                <v-card>
                  <v-card-text>
                    <v-layout align-center>
                      <v-flex xs10>{{ user.name }}</v-flex>
                      <v-spacer/>
                      <v-flex xs2>
                        <v-btn icon right @click="deleteUser(user)">
                          <v-icon color="secondary" small>fas fa-trash-alt</v-icon>
                        </v-btn>
                      </v-flex>
                    </v-layout>
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import UserService from '../services/UserService'
import User from '../../../models/User';

export default {
  name: 'Users',
  data() {
    return ({
      loading: true,
      error: null,
      users: [],
      newUser: { name: null }
    })
  },
  created() {
    this.loadUsers()
  },
  methods: {
    async loadUsers() {
      try {
        this.users = await UserService.getAll()
        this.error = null
        this.loading = false
      } catch (e) {
        console.error(e)
        this.error = e
        this.loading = false
      }
    },
    async addUser(user) {
      const addedUser = await UserService.add(this.newUser)
      this.users.push(addedUser)
      this.newUser.name = null
    },
    async deleteUser(userToDelete) {
      await UserService.deleteUserById(userToDelete._id)
      this.users.splice(this.users.indexOf(userToDelete), 1)
    }
  }
  
}
</script>
