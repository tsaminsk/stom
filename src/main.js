// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import "normalize.css"
import {store} from './store';
import allComponents from './components/allComponents';

Vue.config.productionTip = false

Object.keys(allComponents).forEach(key => {
    Vue.component(key, allComponents[key])
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
      App
  },
  store,
  template: '<App/>'
})
