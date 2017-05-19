import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue';
import Message from './components/Message.vue';
import Navbar from './components/navCompo.vue';
import Input from './components/Input.vue';
import store from './store/store.js';
import Feeds from './pages/Feeds.vue';
import Login from './pages/Login.vue';
import Profile from './pages/Profile.vue';
import News from './components/News.vue'

Vue.use(VueRouter);
Vue.component('app-nav', Navbar);
Vue.component('app-message', Message);
Vue.component('app-news', News)

console.log('here', store);

const routes = [{
    path: '/',
    name: 'login',
    component: Login  },
  {
    path: '/feeds',
    name: 'feeds',
    component: Feeds
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  }
]
const router = new VueRouter({
  routes
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
