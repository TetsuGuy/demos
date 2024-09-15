<script setup lang="ts">
import { onMounted } from 'vue'
import router from '../router';
import { useLoggedInStore } from '../stores/login';
onMounted(() => {
    setTimeout(() => {
        useLoggedInStore().logOut();
        alert('Logged out');
        router.push({ name: 'home' });
    }, 1000);
})
</script>

<template></template>