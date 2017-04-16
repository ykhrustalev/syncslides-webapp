import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import App from './components/App'
import router from './router'
import store from './store'

import VueResource from 'vue-resource'

Vue.use(VueResource);

sync(store, router)

const app = new Vue({
  router,
  store,
  ...App,
  created () {
    this.$store.dispatch('init');
  }
});

export { app, router, store }
