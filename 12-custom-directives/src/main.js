import Vue from "vue";
import App from "./App.vue";

// a directive has five hooks you
// can hook into 1.bind 2.inserted 3.update
// 4.componentUpdate 5.unbind 1&3 are most used
Vue.directive("highlight", {
  bind(el, binding, vnode) {
    // arguments modifiers and values are three things
    // you can work with when creating custom directives
    // el.style.backgroundColor = "green";
    // el.style.backgroundColor = binding.value;
    // when using args
    // when using a modifier
    let delay = 0;
    if (binding.modifiers["delayed"]) {
      delay = 3000;
    }
    setTimeout(() => {
      if (binding.arg === "background") {
        el.style.backgroundColor = binding.value;
      } else {
        el.style.color = binding.value;
      }
    }, delay);
  }
});

new Vue({
  el: "#app",
  render: h => h(App)
});
