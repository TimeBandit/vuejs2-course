import Vue from "vue";
import App from "./App.vue";

// a directive has five hooks you
// can hook into 1.bind 2.inserted 3.update
// 4.componentUpdate 5.unbind 1&3 are most used
Vue.directive("highlight", {
  bind(el, binding, vnode) {
    el.style.backgroundColor = "green";
  }
});

new Vue({
  el: "#app",
  render: h => h(App)
});
