<template>
  <div>
    <p>Counter is: {{ doubleCounter }}</p>
    <p>Number of Clicks: {{ stringCounter }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  // use a computed property to fetch the store values
  // instead of passing a prop
  // props: ['counter']
  // computed: {
  // counter() {
  // this line can break down if it's duplicated in other place
  // and it's changed before being returned, can result in duplication
  // return this.$store.state.counter;
  //   return this.$store.getters.doubleCounter;
  // },
  // clicks() {
  //   return this.$store.getters.stringCounter;
  // }

  // to save yourself listing all the getter manually use 'mapgetters

  // can also pass an object and map getters to different names
  // even this has it's flaws, now we can't add our own getters
  // computed: mapGetters(["doubleCounter", "stringCounter"])

  // solution
  computed: {
    // for the spread operate we need stage-2 presets to be installed
    ...mapGetters(["doubleCounter", "stringCounter"])
    // add your own computed properties
  }
};
</script>