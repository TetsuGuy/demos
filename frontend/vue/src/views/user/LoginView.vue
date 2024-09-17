<template>
  <v-container>
    <v-row justify="center" class="mt-10">
      <v-col cols="12" md="6">
        <v-card outlined>
          <v-card-title class="text-h5">Login</v-card-title>
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
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <!-- Login Button -->
            <v-btn color="primary" @click="onSubmit">Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import router from '../../router';
import { useLoggedInStore } from '../../stores/login';
import { login } from '@/api/authRepository';

const loginStore = useLoggedInStore();
const username = ref('');
const password = ref('');

const onSubmit = async () => {
  try {
    await login({ email: username.value, password: password.value });
    loginStore.logIn();
    alert('Logged in successfully');
    router.push({ name: 'profile' });
  } catch (error) {
    alert('Login failed. Please check your credentials.');
  }
};
</script>

<style scoped>
/* Add margin to the top of the login card for spacing */
.mt-10 {
  margin-top: 40px;
}
</style>
