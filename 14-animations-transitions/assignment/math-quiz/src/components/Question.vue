<template>
  <div class="card">
    <header class="card__header">{{question}}</header>
    <div class="card__body">
      <div class="answers">
        <button
          class="answers__answer"
          v-for="(item) in answers"
          :key="item"
          @click="checkAnswer(item)"
        >{{item}}</button>
      </div>
    </div>
    <div class="card__footer"></div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      answers: [],
      type: "subtraction",
      parameters: { one: null, two: null }
    };
  },
  methods: {
    // TODO ensure that random data exclued the correct answer
    makeNewQuiz() {
      // change the quiz type
      this.type = this.type === "addition" ? "subtraction" : "addition";
      // generate a random number to add/subtract
      const randNum = (num = 100) => Math.ceil(Math.random(num) * 100);
      const wrongAnswer = () => {
        return this.type === "addition"
          ? randNum() + randNum()
          : randNum() - randNum();
      };
      // generate correct result
      const valueA = randNum();
      const valueB = randNum();
      // update data
      this.parameters = { valueA, valueB };
      this.answers = [wrongAnswer(), wrongAnswer(), wrongAnswer()];
      // insert the correct answer into a random position
      this.answers.splice(Math.floor(Math.random() * 4), 0, this.result);
    },
    checkAnswer(answer) {
      if (answer === this.result) {
        console.log("😹");
        this.answered = true;
        this.$emit("guess", true);
      } else {
        console.log("😟");
      }
    }
  },
  computed: {
    result() {
      const { valueA, valueB } = this.parameters;
      return this.type === "addition" ? valueA + valueA : valueA - valueB;
    },
    question() {
      const { valueA, valueB } = this.parameters;
      return this.type === "addition"
        ? `What is ${valueA} + ${valueB}`
        : `What is ${valueA} - ${valueB}`;
    }
  },
  created() {
    this.makeNewQuiz();
  }
};
</script>
<style lang="scss">
</style>
