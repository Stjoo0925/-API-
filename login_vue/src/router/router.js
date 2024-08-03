import { createRouter, createWebHistory } from "vue-router";

const Main = () => import("../view/view.vue");

const routes = [{ path: "/", component: Main }];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
