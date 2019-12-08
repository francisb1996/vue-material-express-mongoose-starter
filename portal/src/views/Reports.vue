<template>
  <v-container fluid class="page">
    <v-layout column>
      <v-flex xs12>
        <h1>Reports</h1>
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
                      label="New Report"
                      v-model="newReport.name"
                      @keyup.enter="addReport(newReport)"/>
                  </v-flex>
                  <v-flex xs10>
                    <v-btn icon @click="addReport(newReport)" :disabled="!newReport.name">
                      <v-icon color="primary">fas fa-plus</v-icon>
                    </v-btn>
                  </v-flex>
                </v-layout>
              </v-flex>
              <v-flex xs6 sm4 md2 pa-2 v-for="(report, i) in reports" :key="i"> 
                <v-card>
                  <v-card-text>
                    <v-layout align-center>
                      <v-flex xs10>{{ report.name }}</v-flex>
                      <v-spacer/>
                      <v-flex xs2>
                        <v-btn icon right @click="deleteReport(report)">
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
//import ReportService from '../services/ReportService'
import Report from '../../../models/Report';

export default {
  name: 'Reports',
  data() {
    return ({
      loading: true,
      error: null,
      reports: [],
      newReport: { name: null }
    })
  },
  created() {
    this.loadReports()
  },
  methods: {
    async loadReports() {
      try {
        this.reports = //await ReportService.getAll()
          [new Report()]
        this.error = null
        this.loading = false
      } catch (e) {
        console.error(e)
        this.error = e
        this.loading = false
      }
    },
    async addReport(report) {
      const addedReport = await ReportService.add(this.newReport)
      this.reports.push(addedReport)
      this.newReport.name = null
    },
    async deleteReport(reportToDelete) {
      await ReportService.deleteReportById(reportToDelete._id)
      this.reports.splice(this.reports.indexOf(reportToDelete), 1)
    }
  }
  
}
</script>
