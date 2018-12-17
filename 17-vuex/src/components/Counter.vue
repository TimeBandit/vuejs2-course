<template>
  <div>
    <button class="btn btn-primary" @click="increment">Increment</button>
    <button class="btn btn-primary" @click="decrement">Decrement</button>
  </div>
</template>

<script>
export default {
  methods: {
    // update the store instead of emitting an event
    increment() {
      this.$store.state.counter++;
      // this.$emit('updated', 1);
    },
    decrement() {
      this.$store.state.counter--;
      // this.$emit('updated', -1);
    }
  }
};
</script>