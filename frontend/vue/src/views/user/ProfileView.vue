<template>
  <v-container fluid>
    <!-- User Profile Section -->
    <v-row>
      <v-col cols="12" md="4">
        <v-card outlined class="pa-4 mb-4">
          <v-row class="d-flex align-center">
            <v-avatar size="80" class="mr-4">
              <img src="https://via.placeholder.com/150" alt="Profile Picture" />
            </v-avatar>
            <div>
              <h3 class="mb-2">{{ userProfile.name }}</h3>
              <v-chip label color="primary" class="ma-1">{{ userProfile.subscriptionPlan }}</v-chip>
            </div>
          </v-row>
          <v-divider class="my-4"></v-divider>
          <v-list dense>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Email</v-list-item-title>
                <v-list-item-subtitle>{{ userProfile.email }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Joined</v-list-item-title>
                <v-list-item-subtitle>{{ userProfile.joinedDate }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>

      <!-- Active Modules Section -->
      <v-col cols="12" md="8">
        <v-card outlined class="pa-4 mb-4">
          <h3 class="mb-4">Active Modules</h3>
          <v-row>
            <v-col
              v-for="(module, index) in activeModules"
              :key="index"
              cols="12"
              md="6"
              class="d-flex align-center"
            >
              <v-badge
                :content="module.alerts.length"
                v-if="module.alerts.length > 0"
                color="red"
                overlap
              >
                <v-card outlined class="pa-3 d-flex flex-column align-center justify-center">
                  <v-icon large class="mb-2">{{ module.icon }}</v-icon>
                  <h4>{{ module.name }}</h4>
                  <p>{{ module.description }}</p>
                </v-card>
              </v-badge>
              <v-card
                v-else
                outlined
                class="pa-3 d-flex flex-column align-center justify-center"
              >
                <v-icon large class="mb-2">{{ module.icon }}</v-icon>
                <h4>{{ module.name }}</h4>
                <p>{{ module.description }}</p>
              </v-card>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// Mock user profile data
const userProfile = ref({
  name: 'John Doe',
  email: 'john.doe@example.com',
  joinedDate: 'January 15, 2023',
  subscriptionPlan: 'Premium',
});

// Mock active modules data
const activeModules = ref([
  {
    name: 'Greenhouse',
    description: 'Monitor and control your greenhouse environment.',
    icon: 'mdi-home-automation',
    alerts: ['Temperature too high'],
  },
  {
    name: 'Lawn Watering',
    description: 'Automate lawn watering schedules and notifications.',
    icon: 'mdi-water-pump',
    alerts: [],
  },
  {
    name: 'Raised Beds',
    description: 'Manage and automate your raised garden beds.',
    icon: 'mdi-flower',
    alerts: ['Soil moisture low'],
  },
  {
    name: 'Weather Station',
    description: 'Get real-time weather updates for your garden.',
    icon: 'mdi-weather-partly-cloudy',
    alerts: [],
  },
]);
</script>

<style scoped>
.v-avatar {
  border: 2px solid #42a5f5;
}
</style>
