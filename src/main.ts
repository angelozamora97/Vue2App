import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import SimpleLayout from '@/layouts/SimpleLayout.vue'
import PageLayout from '@/layouts/PageLayout.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@/assets/css/style.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

// Uso global de componentes
Vue.component('page-layout',PageLayout)
Vue.component('simple-layout',SimpleLayout)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
