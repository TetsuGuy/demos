<template>
    <v-container>
      <v-row justify="center" class="mt-10">
        <v-col cols="12" md="6">
          <v-card outlined>
            <v-card-title class="text-h5">Sign Up</v-card-title>
            <v-card-text>
              <!-- Username Input -->
              <v-text-field
                v-model="username"
                label="Username"
                outlined
                dense
                required
              ></v-text-field>
  
              <!-- Password Input -->
              <v-text-field
                v-model="password"
                label="Password"
                type="password"
                outlined
                dense
                required
              ></v-text-field>
  
              <!-- Email Input -->
              <v-text-field
                v-model="email"
                label="Email"
                outlined
                dense
                required
              ></v-text-field>
            </v-card-text>
  
            <v-card-actions>
              <v-spacer></v-spacer>
              <!-- Register Button -->
              <v-btn color="primary" @click="onSubmit">Sign up</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import router from '../../router';
  
  const username = ref('');
  const password = ref('');
  const email = ref('');
  
  const onSubmit = () => {
    // Simulate registration logic
    setTimeout(() => {
      alert('Registered successfully!');
      router.push({ name: 'home' });
    }, 1000);
  };
  </script>
  
  <style scoped>
  /* Add some margin to the top of the registration card */
  .mt-10 {
    margin-top: 40px;
  }
  </style>
  