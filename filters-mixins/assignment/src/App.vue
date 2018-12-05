<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters & Mixins</h1>
        <!-- Exercise 1) -->
        <input type="text" v-model="text">
        <!-- Build a local Filter which reverses the Text it is applied on -->
        <br>
        <mark>Local Filter</mark>
        <div>{{ text | reverse}}</div>
        <!-- Exercise 2 -->
        <!-- Build a global Filter which counts the length of a word and it appends it -->
        <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
        <br>
        <mark>Global filter</mark>
        <div>{{ text | length}}</div>
        <!-- Exercise 3 -->
        <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
        <br>
        <mark>Computed properties</mark>
        <div>{{ reversedWord }}</div>
        <div>{{ withLength }}</div>
        <!-- Exercise 4 -->
        <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
      </div>
    </div>
  </div>
</template>

<script>
import computedMixin from "./computedMixin.js";
export default {
  mixins: [computedMixin],
  data: function() {
    return {
      text: ""
    };
  },
  filters: {
    reverse(value) {
      return value
        .split("")
        .reverse()
        .join("");
    }
  }
  // computed: {
  //   reversedWord() {
  //     return this.text
  //       .split("")
  //       .reverse()
  //       .join("");
  //   },
  //   withLength() {
  //     return this.text + ` (${this.text.length})`;
  //   }
  // }
};
</script>

<style>
</style>
