<template>
  <v-app>
    <!-- Navigation Bar -->
    <v-app-bar app color="primary" dark>
      <v-toolbar-title class="white--text">Smart Garden Automation</v-toolbar-title>
      <v-spacer></v-spacer>

      <!-- Navigation Links -->
      <v-btn text color="white" to="/">Home</v-btn>
      <v-btn v-if="!loginStore.isLoggedIn" text color="white" to="/signup">Sign up</v-btn>
      <v-btn v-if="!loginStore.isLoggedIn" text color="white" to="/login">Login</v-btn>
      <v-btn v-if="loginStore.isLoggedIn" text color="white" to="/logout">Logout</v-btn>
      <v-btn v-if="loginStore.isLoggedIn" text color="white" to="/profile">Profile</v-btn>
      <v-btn text color="white" to="/shop">Shop</v-btn>
    </v-app-bar>

    <!-- Main Content -->
    <v-main>
      <v-container>
        <RouterView />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router"
import { useLoggedInStore } from "./stores/login"
import router from "./router"

const loginStore = useLoggedInStore()

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !loginStore.isLoggedIn) {
    next("/login")
  } else {
    next()
  }
})
</script>

<style scoped>
/* Enhance the appearance of navigation buttons */
.v-btn {
  margin-left: 5px;
}

.v-app-bar {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.v-container {
  margin-top: 20px;
}
</style>
