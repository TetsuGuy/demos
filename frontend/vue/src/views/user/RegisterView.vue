<template>
    <div>
        <input type="text" v-model="username" placeholder="Username">
        <input type="password" v-model="password" placeholder="Password">
        <input type="text" v-model="email" placeholder="Email">
        <button @click="onSubmit">Register</button>
    </div>
</template>

<script setup lang="ts">    
    import router from '../../router';
    import { ref } from 'vue';
    const username = ref('');
    const password = ref('');
    const email = ref('');
    const onSubmit = () => {
        setTimeout(() => {
            alert('Registered');
            router.push({ name: 'home' });
        }, 1000);
    }