import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useLoggedInStore = defineStore('loggedIn', () => {
  const loggedIn = ref(false)
  const isLoggedIn = computed(() => loggedIn.value === true)
  function logIn() {
    loggedIn.value = true
  }
  function logOut() {
    loggedIn.value = false
  }

  return { loggedIn, logIn, logOut, isLoggedIn }
})
