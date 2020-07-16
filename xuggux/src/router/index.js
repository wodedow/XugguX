import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);


const Index = () => import("@/views/index/Index.vue");
const Notebook = () => import("@/views/notes/Note.vue");
const About = () => import("@/views/about/About.vue");
const Green = () => import("@/views/green.vue");
const Blue = () => import("@/views/blue.vue");
const Purple = () => import("@/views/purple.vue");
const Cyan = () => import("@/views/cyan.vue");

const routes = [{
    path: "",
    redirect: "/index"
  }, {
    path: "/index",
    component: Index
  },
  {
    path: "/notebook",
    component: Notebook
  },
  {
    path: "/about",
    component: About
  },
  {
    path: "/green",
    component: Green
  }, {
    path: "/blue",
    component: Blue
  }, {
    path: "/purple",
    component: Purple
  }, {
    path: "/cyan",
    component: Cyan
  }
]

const router = new Router({
  routes,
  mode: "history"
})

export default router