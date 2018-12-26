<template>
  <div>
    <h1>The User Page</h1>
    <hr>
    <!-- <p>Loaded ID: {{id}}</p> -->
    <button @click="navigateToHome">Go to Home</button>
    <hr>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  // props: {
  //   id: {
  //     type: String,
  //     default: ""
  //   }
  // },
  // data() {
  //   return {};
  // },
  // old way
  // watch: {
  // how to make sure new params on the same route/component
  // combination get loaded
  //   $route(to, from) {
  //     this.id = to.params.id;
  //   }
  // },
  methods: {
    navigateToHome() {
      this.$router.push("/");
    }
  }
};
</script>