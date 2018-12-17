<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Vuex</h1>
        <!-- <app-result :counter="counter"></app-result> -->
        <app-result></app-result>
        <hr>
        <!-- <app-counter @updated="counter += $event"></app-counter> -->
        <app-counter></app-counter>
        <hr>
        <app-another-counter></app-another-counter>
      </div>
    </div>
  </div>
</template>

<script>
import Counter from "./components/Counter.vue";
import AnotherCounter from "./components/AnotherCounter.vue";
import Result from "./components/Result.vue";

export default {
  // data() {
  //   return {
  //     counter: 0
  //   };
  // },
  components: {
    appCounter: Counter,
    appAnotherCounter: AnotherCounter,
    appResult: Result
  }
};
</script>

