<template>
  <div>
    <h3>Some User Details</h3>
    <p>User loaded has ID: {{$route.params.id}}</p>
    <!-- 👇 one way -->
    <router-link tag="button" :to="link" class="btn btn-primary">Edit User</router-link>
  </div>
  <!-- alternative way of doing it before named routes -->
  <!-- :to="'/user/'+$route.params.id+'/edit'" -->
</template>

<script>
export default {
  data() {
    return {
      link: {
        name: "userEdit",
        params: { id: this.$route.params.id },
        query: { locale: "en", q: 100 },
        hash: "#data"
      }
    };
  },
  // component level routing hooks
  beforeRouteEnter(to, from, next) {
    // the component is not created until you you call next()
    // so you can't refer to the instance e.g this.link
    // next(false); doesn't get loaded
    // next(vm => {
    //   vm.link;
    // });
    next();
    // ...
  },
  beforeRouteLeave(to, from, next) {
    // ...
    next();
  }
};
</script>