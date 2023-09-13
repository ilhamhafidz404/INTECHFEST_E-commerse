import "./style.css";
import "@splidejs/vue-splide/css";
import "vanilla-tilt";

import { createApp } from "vue";
import App from "./App.vue";
import VueSplide from "@splidejs/vue-splide";
import router from "./router";
import "aos/dist/aos.css";

const app = createApp(App);

app.use(router, VueSplide);

app.mount("#app");
