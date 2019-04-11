import Vue from "vue";
import VueRouter from "vue-router";
import { routes } from "./routes";
import { popper } from "popper";
import { jquery } from "jquery";
import { bootstrap } from "bootstrap";
import "";
import App from "./App.vue";

Vue.config.productionTip = false;
Vue.use(VueRouter);

const router = new VueRouter({
 mode: "history",
 routes
});

new Vue({
 router,
 render: h => h(App)
}).$mount("#app");
