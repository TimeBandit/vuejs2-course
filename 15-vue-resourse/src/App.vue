<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Http</h1>
        <div class="form-group">
          <label for>Username</label>
          <input type="text" class="form-control" v-model="user.username">
        </div>
        <div class="form-group">
          <label for>Mail</label>
          <input type="text" class="form-control" v-model="user.email">
        </div>
        <button class="btn btn-primary" @click="submit">Send</button>
        <span>{{statusMessage}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: "",
        email: ""
      },
      status: null
    };
  },
  methods: {
    submit() {
      this.status = "";
      this.$http
        .post("https://vuejs-http-927e6.firebaseio.com/data.json", this.user)
        .then(
          res => {
            console.log(res);
            this.status = res.status;
          },
          rej => {
            console.log(rej);
            this.status = res.status;
          }
        );
    }
  },
  computed: {
    statusMessage: function() {
      switch (this.status) {
        case null:
          return "";
        case "":
          return "sending...";
          break;
        case 200:
          return "";
          break;
        default:
          return "there was a problem";
          break;
      }
    }
  }
};
</script>

<style>
</style>
