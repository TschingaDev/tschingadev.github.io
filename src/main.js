import Vue from 'vue';
import { BootstrapVue } from 'bootstrap-vue';
import VueMq from 'vue-mq';
import App from './App.vue';

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);

Vue.use(VueMq, {
  breakpoints: {
    sm: 576,
    md: 768,
    lg: 992,
    xl: Infinity,
  },
  defaultBreakpoint: 'sm',
});

new Vue({
  render: (h) => h(App),
}).$mount('#app');
