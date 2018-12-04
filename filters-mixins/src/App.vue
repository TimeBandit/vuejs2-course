<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters & Mixins</h1>
        <!-- the pipe symbol is used to pass the data -->
        <div>{{text | toUppercase | toLowerCase }}</div>
        <input type="text" v-model="filterText">
        <ul>
          <li v-for="(fruit, index) in filteredFruits" :key="index">{{fruit}}</li>
        </ul>
        <app-list></app-list>
      </div>
    </div>
  </div>
</template>

<script>
import List from "./List.vue";
import { fruitMixin } from "./fruitMixin.js"; // mixins are essentially code snippets

export default {
  mixins: [fruitMixin], // vue merges the mixin with the already present data and other properties
  // see the docs for how this merge happens
  // filter is used to transform output in the data
  data() {
    return {
      text: "hello there",
      fruits: ["apple", "banana", "mango", "melon"],
      filterText: ""
    };
  },
  components: {
    appList: List
  },
  filters: {
    toUppercase(value) {
      // value is the data you want to transform
      return value.toUpperCase();
    }
  },
  computed: {
    // computed properties are only recalculated when it's dependencies change
    // in most cases computed properties are better than normal filters
    filteredFruits() {
      return this.fruits.filter(element => {
        return element.match(this.filterText);
      });
    }
  }
};
</script>

<style>
</style>
