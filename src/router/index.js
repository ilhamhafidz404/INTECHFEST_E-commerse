import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import Detail from "../views/Detail.vue";
import Search from "../views/Search.vue";
import Cart from "../views/Cart.vue";
import Login from "../views/Login.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/detail",
      name: "detail",
      component: Detail,
    },
    {
      path: "/search",
      name: "search",
      component: Search,
    },
    {
      path: "/cart",
      name: "cart",
      component: Cart,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
  ],
});

export default router;
