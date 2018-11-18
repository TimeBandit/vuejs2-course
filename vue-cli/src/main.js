import Vue from "vue";
import App from "./App.vue";

// a newer way of mounting
const vm = new Vue({
  ...App
});

vm.$mount("#app");

// new Vue({
//   el: '#app',
//   render: h => h(App)
// })
