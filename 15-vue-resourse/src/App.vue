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
        <br>
        <br>
        <input type="text" class="form-control" v-model="node">
        <br>
        <br>
        <button class="btn btn-primary" @click="fetchData">Get Data</button>
        <br>
        <br>
        <ul class="list-group">
          <li
            class="list-group-item"
            v-for="(u, index) in users"
            :key="index"
          >{{u.username}}-{{u.email}}</li>
        </ul>
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
      users: [],
      status: null,
      resource: {},
      node: "data"
    };
  },
  methods: {
    submit() {
      this.status = "";
      // this.$http.post("data.json", this.user).then(
      //   res => {
      //     console.log(res);
      //     this.status = res.status;
      //   },
      //   rej => {
      //     console.log(rej);
      //     this.status = res.status;
      //   }
      // );

      // using a resource
      this.resource.save({ node: this.node }, this.user).then(
        res => {
          console.log(res);
          this.status = res.status;
        },
        rej => {
          console.log(rej);
          this.status = res.status;
        }
      );

      // using a custom resource
      // this.resource.saveAlt({}, this.user).then(
      //   res => {
      //     console.log(res);
      //     this.status = res.status;
      //   },
      //   rej => {
      //     console.log(rej);
      //     this.status = res.status;
      //   }
      // );
    },
    fetchData() {
      // this.$http
      //   .get("data.json")
      //   .then(res => {
      //     // return the body as a json object
      //     return res.json();
      //   })
      //   .then(data => {
      //     console.log(data);
      //     // convert the object values into an array
      //     this.users = Object.values(data);
      //   });

      // using the resouce to get the data
      this.resource
        .getData({ node: this.node })
        .then(res => {
          // return the body as a json object
          return res.json();
        })
        .then(data => {
          console.log(data);
          // convert the object values into an array
          this.users = Object.values(data);
        });
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
  },
  created() {
    const customActions = {
      saveAlt: { method: "POST", url: "alternative.json" },
      getData: { method: "GET" }
    };
    // this.resource = this.$resource("data.json", {}, customActions);
    // template urls
    this.resource = this.$resource("{node}.json", {}, customActions);
  }
};
</script>

<style>
</style>
