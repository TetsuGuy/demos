import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue")
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/user/LoginView.vue")
    },
    {
      path: "/logout",
      name: "logout",
      component: () => import("../views/user/LogoutView.vue")
    },
    {
      path: "/profile",
      name: "profile",
      component: () => import("../views/user/ProfileView.vue"),
      meta: { requiresAuth: true }
    },
    {
      path: "/shop",
      name: "shop",
      component: () => import("../views/ShopView.vue")
    }
  ]
})

export default router
