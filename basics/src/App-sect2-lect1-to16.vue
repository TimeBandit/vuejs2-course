<template>
  <div id="app">
    <h1 v-once>
      {{name}}
    </h1>
    <p class="title">
      {{newTitle}}
      <a :href="link" target="_blank">Goto Google</a>
    </p>
    <p v-html="fininshedLink">
    </p>
    <div>
      <h2>Module 8 Assignment</h2>
      <p> VueJS is pretty cool - {{name}} ({{age}})</p>
      <p>{{getAge()}}</p>
      <p>{{randomNumber()}}</p>
      <a :href="gitHubLink">My Github Profile</a>
    </div>
  <div>
    <div>Counter is at: {{counter}}</div>
    <button v-on:click="increase">increase count</button>
  </div>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "app",
  data: function() {
    return {
      name: "Imran",
      age: 4,
      link: "http://google.com",
      fininshedLink: '<a href="http://google.com">Google</a>',
      gitHubLink: "https://github.com/TimeBandit",
      counter: 0
    };
  },
  methods: {
    sayHello() {
      this.name = "Imran is nowhere to be seen";
      return `Hello ${this.name}: `;
    },
    randomNumber() {
      const rnd = Math.random().toFixed(2) * 100;
      return Math.ceil(rnd);
    },
    getAge() {
      return this.age * 3;
    },
    increase(){
      this.counter++;
    }
  },
  computed: {
    newTitle: function() {
      return `${this.name} is nowhere to be seen`;
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
