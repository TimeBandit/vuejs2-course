<template>
  <!-- <ul class="nav nav-pills">
  <li class="nav-item">-->
  <!-- no href attributes because it would -->
  <!-- send the request to the server -->
  <!-- <router-link to="/">Home</router-link>
    </li>
    <li class="nav-item">
      <router-link to="/user">User</router-link>
    </li>
  </ul>-->
  <ul class="nav nav-pills">
    <router-link to="/" tag="li" active-class="active" exact>
      <a>Home</a>
    </router-link>
    <router-link to="/user/1" tag="li" active-class="active">
      <a>User 1</a>
    </router-link>
  </ul>
</template>
<script>
export default {};
</script>
