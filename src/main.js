import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import jQuery from "jquery";

window.jQuery = jQuery;

import "@/assets/js/plugins/@fortawesome/fontawesome-free/css/all.min.css";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "@/assets/js/plugins/nucleo/css/nucleo.css";
import "@/assets/scss/argon-dashboard.scss";

import VueApexCharts from "vue-apexcharts";

Vue.component("apexchart", VueApexCharts);

import VueTelInput from "vue-tel-input";

Vue.use(VueTelInput);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
