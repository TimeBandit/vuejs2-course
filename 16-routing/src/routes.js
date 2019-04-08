import Home from "./components/Home.vue";
import Header from "./components/Header.vue";

// Lazy loading of components
// Doing it this way is optional but good
const User = resolve => {
 require.ensure(["./components/user/User.vue"], () => {
  resolve(require("./components/user/User.vue"));
 });
};

const UserStart = resolve => {
 require.ensure(["./components/user/UserStart.vue"], () => {
  resolve(require("./components/user/UserStart.vue"));
 });
};

const UserDetail = resolve => {
 require.ensure(["./components/user/UserDetail.vue"], () => {
  resolve(require("./components/user/UserDetail.vue"));
 });
};
const UserEdit = resolve => {
 require.ensure(["./components/user/UserEdit.vue"], () => {
  resolve(require("./components/user/UserEdit.vue"));
 });
};

export const routes = [
 {
  path: "",
  // named router views allow you to render components depending on the route
  name: "home",
  // component: Home, in favour of named router views
  components: {
   default: Home,
   "header-top": Header // this will render only @ the home route
  }
 },
 // { path: "/user/:id", component: User, props: true }
 {
  path: "/user",
  // component: User,
  // nested routes children are subroutes
  // won't be rendered in app.vue; our route router
  components: {
   default: User,
   "header-bottom": Header
  },
  children: [
   { path: "", component: UserStart },
   {
    path: ":id",
    component: UserDetail,
    beforeEnter: (to, from, next) => {
     // route level hook
     console.log("inside route setup");
     // do your other checks
     next();
    }
   },
   { path: ":id/edit", component: UserEdit, name: "userEdit" }
  ]
 },
 // redirects
 // { path: "/redirect-me", redirect: "/user" }
 { path: "/redirect-me", redirect: { name: "home" } }, // passing an object
 // catch all routes
 { path: "*", redirect: "/" }
];
