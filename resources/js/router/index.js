import { createRouter, createWebHistory } from 'vue-router'
import store from "../store/index";
import auth from "../middleware/auth";
import guest from "../middleware/guest";
import middlewarePipeline from "../router/middlewarePipeline";

const routes = [
  {
    path: "/",
    name: "welcome",
    // meta: { middleware: [guest] },
    component: () => import("../views/Welcome.vue"),
  },
  {
    path: '/login',
    name: 'login',
    redirect: '/',
    meta: { middleware: [guest] },
    component: () => import('../views/Login.vue')
  },
  {
    path: '/home',
    name: 'home',
    meta: { middleware: [auth] },
    component: () => import('../views/Home.vue')
  },
  {
    path: '/clients/:id/',
    name: 'client',
    component: () => import('../views/ClientVideoList.vue')
    // component: () => import('../views/Client.vue')
  },
]

const router = createRouter({
  routes,
  history: createWebHistory(),
  scrollBehavior() {
    return { top: 0 }
  }
})

router.beforeEach((to, from, next) => {
  const middleware = to.meta.middleware;
  const context = { to, from, next, store };

  if (!middleware) {
    return next();
  }

  middleware[0]({
    ...context,
    next: middlewarePipeline(context, middleware, 1),
  });
});

export default router
