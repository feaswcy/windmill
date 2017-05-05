import Vue from 'vue'
import App from './App.vue'
import router from './router'
import * as filters from './filters'

import axios from 'axios'
  Vue.prototype.$http = axios

// sync the router with the vuex store.
// this registers `store.state.route`


// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

// create the app instance.
// here we inject the router and store to all child components,
// making them available everywhere as `this.$router` and `this.$store`.
const app = new Vue({
  router,
  ...App
})

// expose the app, the router and the store.
// note we are not mounting the app here, since bootstrapping will be
// different depending on whether we are in a browser or on the server.
export { app, router }
