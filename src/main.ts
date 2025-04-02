import "./style.css";
import App from "./App.vue";
import { createApp } from "vue";
import {
  createRouter,
  createWebHashHistory,
  type RouteRecordRaw,
} from "vue-router";

const app = createApp(App);

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("./pages/Home.vue"),
    name: "home",
  },
  {
    path: "/wifi",
    component: () => import("./pages/Wifi.vue"),
    name: "wifi",
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

app.use(router);

app.mount("#app");
