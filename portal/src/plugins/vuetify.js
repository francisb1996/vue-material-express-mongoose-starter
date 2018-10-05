import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify, {
  theme: {
    primary: '#F25F5C',
    secondary: '#424242',
    accent: '#82B1FF',
    error: 'red',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107',
    background: 'white'
  },
  customProperties: true,
  iconfont: 'fa',
})
