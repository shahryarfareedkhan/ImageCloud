import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Signup from "../views/Signup.vue";
import Main from "../views/Main.vue";
import Forget from "../views/Forget.vue";
import Update from "../views/Update.vue";
import Recover from "../views/Recover.vue";
import Navbar from "../views/Navbar.vue";
import Checksign from "../views/Checksign.vue";
import Gallery from "../views/Gallery.vue";
import Passwordupdate from "../views/Passwordupdate.vue";
import demo from "../views/demo.vue";
import Profile from "../views/Profile.vue";
import Gallary from "../views/Gallary.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Navbar",
    name: "Navbar",
    component: Navbar,
  },
  {
    path: "/Gallary",
    name: "Gallary",
    component: Gallary,
  },
  {
    path: "/demo",
    name: "demo",
    component: demo,
  },
  {
    path: "/Profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/Gallery",
    name: "Gallery",
    component: Gallery,
  },
  {
    path: "/Passwordupdate",
    name: "Passwordupdate",
    component: Passwordupdate,
  },
  {
    path: "/Main",
    name: "Main",
    component: Main,
  },
  {
    path: "/Checksign",
    name: "Checksign",
    component: Checksign,
  },
  {
    path: "/Update",
    name: "Update",
    component: Update,
  },
  {
    path: "/Recover",
    name: "Recover",
    component: Recover,
  },
  {
    path: "/Login",
    name: "Login",
    component: Login,
  },
  {
    path: "/Signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/Forget",
    name: "Forget",
    component: Forget,
  },

  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
