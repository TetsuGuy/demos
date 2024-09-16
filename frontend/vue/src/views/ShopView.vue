<template>
    <v-container fluid>
      <!-- Header Section -->
      <v-row>
        <v-col cols="12" class="text-center mb-5">
          <h1 class="display-2 font-weight-bold">Available Modules</h1>
          <p class="subtitle-1">Enhance your garden with our range of automation modules</p>
        </v-col>
      </v-row>
  
      <!-- Modules Section -->
      <v-row>
        <v-col
          v-for="(module, index) in availableModules"
          :key="index"
          cols="12"
          md="4"
          class="d-flex align-stretch"
        >
          <v-card outlined class="pa-4 mb-4 d-flex flex-column justify-space-between">
            <v-card-title>
              <v-icon left>{{ module.icon }}</v-icon>
              {{ module.name }}
            </v-card-title>
            <v-card-subtitle class="mb-2">{{ module.description }}</v-card-subtitle>
            <v-card-text class="mb-4">
              <strong>Price:</strong> {{ module.price }} USD
            </v-card-text>
            <v-card-actions>
              <v-btn color="primary" @click="buyModule(module)">Buy Now</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  // Mock data for available modules
  const availableModules = ref([
    {
      name: 'Greenhouse Controller',
      description: 'Automate your greenhouse environment controls, including temperature, humidity, and lighting.',
      icon: 'mdi-home-automation',
      price: 299.99,
    },
    {
      name: 'Smart Lawn Watering',
      description: 'Automate lawn watering schedules and save water with intelligent weather monitoring.',
      icon: 'mdi-sprinkler-variant',
      price: 199.99,
    },
    {
      name: 'Raised Bed Sensor Kit',
      description: 'Monitor soil moisture, temperature, and nutrient levels in your raised garden beds.',
      icon: 'mdi-flower-outline',
      price: 149.99,
    },
    {
      name: 'Weather Station Pro',
      description: 'Get real-time weather updates and forecasts tailored for your garden’s location.',
      icon: 'mdi-weather-cloudy',
      price: 249.99,
    },
    {
      name: 'Garden Security Camera',
      description: 'Keep an eye on your garden with a high-definition security camera with night vision.',
      icon: 'mdi-cctv',
      price: 159.99,
    },
  ]);
  
  // Method to handle buying a module
  const buyModule = (module) => {
    alert(`You have selected to buy: ${module.name} for ${module.price} USD`);
    // Here, you can add your logic to handle the purchase, such as redirecting to a checkout page
  };
  </script>
  
  <style scoped>
  .v-card {
    transition: all 0.3s ease;
  }
  
  .v-card:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  }
  </style>
  