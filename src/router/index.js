import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import Detail from "../views/Detail.vue";
import Search from "../views/Search.vue";
import Cart from "../views/Cart.vue";
import Transaction from "../views/Transaction.vue";
import Checkout from "../views/Checkout.vue";
import Payment from "../views/Payment.vue";
import Product from "../views/Product.vue";
import Recomended from "../views/Recomended.vue";
import Login from "../views/Login.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 };
  },
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
      path: "/transaction",
      name: "transaction",
      component: Transaction,
    },
    {
      path: "/checkout",
      name: "checkout",
      component: Checkout,
    },
    {
      path: "/payment",
      name: "payment",
      component: Payment,
    },
    {
      path: "/product",
      name: "product",
      component: Product,
    },
    {
      path: "/recomended/:slug",
      name: "recomended",
      component: Recomended,
      props: true,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
  ],
});

export default router;
