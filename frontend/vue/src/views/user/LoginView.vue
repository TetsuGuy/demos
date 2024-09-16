<template>
    <div>
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="6">
            <v-text-field
              v-model="username"
              label="Username"
              outlined
              dense
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="12" md="6">
            <v-text-field
              v-model="password"
              label="Password"
              type="password"
              outlined
              dense
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="12" md="6" class="text-center">
            <v-btn color="primary" @click="onSubmit">Login</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </template>
  
  <script setup lang="ts">
  import router from '../../router';
  import { ref } from 'vue';
  import { useLoggedInStore } from '../../stores/login';
  
  const loginStore = useLoggedInStore();
  const username = ref('');
  const password = ref('');
  
  const onSubmit = () => {
    setTimeout(() => {
      loginStore.logIn();
      alert('Logged in');
      router.push({ name: 'profile' });
    }, 1000);
  };
  </script>
  