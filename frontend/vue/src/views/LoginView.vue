<template>
    <div>
        <input type="text" v-model="username" placeholder="Username">
        <input type="password" v-model="password" placeholder="Password">
        <button @click="onSubmit">Login</button>
    </div>
</template>

<script setup lang="ts">    
    import router from '../router';
    import { ref } from 'vue';
    import { useLoggedInStore } from '../stores/login';
    const loginStore = useLoggedInStore();
    const username = ref('');
    const password = ref('');
    const onSubmit = () => {
        setTimeout(() => {
            loginStore.logIn();
            alert('Logged in');
            router.push({ name: 'profile' });
        }, 1000);
    }
</script>