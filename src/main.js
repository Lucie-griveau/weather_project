import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import CitiesList from './components/CitiesList.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  { path: '/cities', component: CitiesList }, //routes pour cities qui affiche le composant CitiesList
]

const router = new VueRouter({ //instancier la VueRouter (from 'vue-router')
  routes // short for `routes: routes`
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')