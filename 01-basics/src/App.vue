<template>
  <div id="app">
    <p >Counter is at: {{counter}}</p>
    <button v-on:click="increase(2, $event)">Increase Count</button>
    <p v-on:mousemove="updateCoors">
      Propogation is stopped when hovering over DEAD
      <br>
      Coordinate: {{x}} / {{y}}
      - <span v-on:mousemove.stop="">DEAD</span>
    </p>
    <p>
      Using key modifiers: You can chain them .keyup.enter.space
      <input type="text" v-on:keyup.enter.space="alertMe">
    </p>
    <p>
      Using Computed Properties
      
    </p>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "app",
  data: function() {
    return {
      counter: 0,
      x: 0,
      y: 0
    };
  },
  methods: {
    increase(step, event) {
      event;
      this.counter += step;
    },
    updateCoors(event) {
      this.x = event.clientX;
      this.y = event.clientY;
    },
    alertMe(event) {
      alert(event.target.value);
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
