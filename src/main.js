import Vue from 'vue';
import 'fullpage.js/vendors/scrolloverflow'; // Optional. When using scrollOverflow:true
import VueFullPage from 'vue-fullpage.js';
import { BootstrapVue } from 'bootstrap-vue';
import App from './App.vue';

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false;
Vue.use(VueFullPage);
Vue.use(BootstrapVue);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
