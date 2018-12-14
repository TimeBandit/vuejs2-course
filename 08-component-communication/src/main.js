import Vue from 'vue'
import App from './App.vue'

// example of a simple event bus
export const eventBus = new Vue();

// an alternative approach is to centralize the emits in the event bus
// i.e only the event bus can emit event and the components subscribe 
// to these events. This pattern is for centralising code & data
export const eventBus2 = new Vue({
  methods: {
    changeAge(age){
      this.$emit('ageWasEdited', age);
    }
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
});
