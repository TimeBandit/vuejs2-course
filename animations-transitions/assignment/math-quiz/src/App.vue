<template>
  <div id="app">
    <div class="container">
      <div class="quiz">
        <header class="quiz__header">
          <h1>The Super Quiz</h1>
        </header>
        <div class="quiz__content">
          <!-- <component :is="question"></component> -->
          <div class="card" v-if="newQuestion">
            <header class="card__header">{{question}}</header>
            <div class="card__body">
              <div class="answers">
                <button class="answers__answer" v-for="(item) in answers" :key="item">{{item}}</button>
              </div>
            </div>
          </div>
          <div v-else>test</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "app",
  components: {
    HelloWorld
  },
  data() {
    return {
      answers: [1, 2, 3, 4],
      newQuestion: true,
      parameters: { one: null, two: null }
    };
  },
  methods: {
    makeParameters() {
      const randNum = () => Math.ceil(Math.random(100) * 100);
      this.parameters = { one: randNum(), two: randNum() };
    }
  },
  computed: {
    result() {
      const { one, two } = this.parameters;
      return one + two;
    },
    question() {
      const { one, two } = this.parameters;
      return `What is ${one} + ${two}`;
    }
  },
  created() {
    this.makeParameters();
  }
};
</script>

<style lang="scss">
// values
$golden-ratio: 1.62;
$space-small: (0.5rem * $golden-ratio);
$space-medium: (1rem * $golden-ratio);
$space-large: (2rem * $golden-ratio);

// colors
$light-grey: #d3d3d3;

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.card {
  margin: 0 auto;
  width: 350px;
  box-shadow: 0 3px 5px rgba($color: #2c3e50, $alpha: 0.15);
  &__header {
    padding-top: $space-small;
    padding-bottom: $space-small;
  }
  &__body {
    padding: $space-small $space-large;
  }
}

.answers {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  &__answer {
    width: $space-large;
    height: $space-large;
    margin: 0 $space-medium $space-medium $space-medium;
  }
}
</style>
