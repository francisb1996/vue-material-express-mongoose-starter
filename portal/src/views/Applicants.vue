<template>
  <v-container fluid class="page">
    <v-layout column>
      <v-flex xs12>
        <h1>Applicants</h1>
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
                      label="New Applicant"
                      v-model="newApplicant.name"
                      @keyup.enter="addApplicant(newApplicant)"/>
                  </v-flex>
                  <v-flex xs10>
                    <v-btn icon @click="addApplicant(newApplicant)" :disabled="!newApplicant.name">
                      <v-icon color="primary">fas fa-plus</v-icon>
                    </v-btn>
                  </v-flex>
                </v-layout>
              </v-flex>
              <v-flex xs6 sm4 md2 pa-2 v-for="(applicant, i) in applicants" :key="i"> 
                <v-card>
                  <v-card-text>
                    <v-layout align-center>
                      <v-flex xs10>{{ applicant.name }}</v-flex>
                      <v-spacer/>
                      <v-flex xs2>
                        <v-btn icon right @click="deleteApplicant(applicant)">
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
//import ApplicantService from '../services/ApplicantService'
import Applicant from '../../../models/Applicant';

export default {
  name: 'Applicants',
  data() {
    return ({
      loading: true,
      error: null,
      applicants: [],
      newApplicant: { name: null }
    })
  },
  created() {
    this.loadApplicants()
  },
  methods: {
    async loadApplicants() {
      try {
        this.applicants = //await ApplicantService.getAll()
          [new Applicant({name: 'Danny T.'})]
        this.error = null
        this.loading = false
      } catch (e) {
        console.error(e)
        this.error = e
        this.loading = false
      }
    },
    async addApplicant(applicant) {
      const addedApplicant = await ApplicantService.add(this.newApplicant)
      this.applicants.push(addedApplicant)
      this.newApplicant.name = null
    },
    async deleteApplicant(applicantToDelete) {
      await ApplicantService.deleteApplicantById(applicantToDelete._id)
      this.applicants.splice(this.applicants.indexOf(applicantToDelete), 1)
    }
  }
  
}
</script>
