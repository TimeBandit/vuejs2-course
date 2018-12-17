<template>
  <div>
    <p>Incrementing/Decrementing through mutations</p>
    <button class="btn btn-primary" @click="increment">Increment</button>
    <button class="btn btn-primary" @click="decrement">Decrement</button>
    <p>Async Incrementing/Decrementing through mutations</p>
    <button class="btn btn-primary" @click="asyncIncrement">Async Increment</button>
    <button class="btn btn-primary" @click="asyncDecrement">Async Decrement</button>
  </div>
</template>

<script>
// to simplify we can also mapmutations as we did with with mapgetters
import { mapMutations, mapActions } from "vuex";
export default {
  // methods: {
  //   // update the store instead of emitting an event
  //   increment() {
  //     this.$store.commit("increment");
  //   },
  //   decrement() {
  //     this.$store.commit("decrement");
  //   }
  // }
  methods: {
    ...mapMutations(["increment", "decrement"]),
    ...mapActions(["asyncIncrement", "asyncDecrement"])
  }
};
</script>