
<template>
  <nav class="app-nav">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink v-if="!loginStore.isLoggedIn" to="/login">Login</RouterLink>
    <RouterLink v-if="loginStore.isLoggedIn" to="/logout">Logout</RouterLink>
    <RouterLink v-if="loginStore.isLoggedIn" to="/profile">Profile</RouterLink>
  </nav>
  <RouterView />
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useLoggedInStore } from './stores/login';
const loginStore = useLoggedInStore();

import router from './router';

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !loginStore.isLoggedIn) {
    next('/login');
  } else {
    next();
  }
});
</script>

<style scoped>
.app-nav a {
  margin-right: 10px;
}
</style>
