<template>
  <div>
    <h1>Filters & Mixins</h1>
    <!-- the pipe symbol is used to pass the data -->
    <input type="text" v-model="filterText">
    <ul>
      <li v-for="(fruit, index) in filteredFruits" :key="index">{{fruit}}</li>
    </ul>
  </div>
</template>

<script>
import { fruitMixin } from "./fruitMixin.js"; // mixins are essentially code snippets
export default {
  mixins: [fruitMixin]
  // filter is used to transform output in the data
  // data() {
  //   return {
  //     fruits: ["apple", "banana", "mango", "melon"],
  //     filterText: ""
  //   };
  // },
  // computed: {
  // computed properties are only recalculated when it's dependencies change
  // in most cases computed properties are better than normal filters
  //   filteredFruits() {
  //     return this.fruits.filter(element => {
  //       return element.match(this.filterText);
  //     });
  //   }
  // }
};
</script>

<style>
</style>
