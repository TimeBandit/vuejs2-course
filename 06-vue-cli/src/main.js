import Vue from "vue";
import App from "./App.vue";
import Home from "./Home.vue";

// the imported component is globally registered
Vue.component('app-servers', Home);
/* 
<style lang="scss" scoped>
add scoped to the style for the componenet means
that the style will only be applied to that com-
ponent
*/

// a newer way of mounting
const vm = new Vue({
  ...App
});

vm.$mount("#app");

// new Vue({
//   el: '#app',
//   render: h => h(App)
// })
