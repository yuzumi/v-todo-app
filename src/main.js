import Vue from "vue";
import App from "@/App.vue";
import router from "@/router";
import store from "@/store";
import i18n from "@/i18n";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-material-design/dist/css/bootstrap-material-design.min.css";
import "@/assets/styles/index.css";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
