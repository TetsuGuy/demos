<template>
  <v-container fluid>
    <!-- Hero Section -->
    <v-row class="d-flex align-center justify-center mb-5" style="background: url('path/to/your/garden-image.jpg') center/cover; height: 300px;">
      <v-col cols="12" class="text-center">
        <h1 class="display-2 white--text font-weight-bold">Welcome to Smart Garden Automation</h1>
        <p class="white--text">Automate everything from watering your lawn to controlling your robotic greenhouse</p>
      </v-col>
    </v-row>

    <!-- Latest News Section -->
    <v-row>
      <v-col cols="12">
        <h2 class="font-weight-bold mb-4">Latest News</h2>
        <v-carousel
          height="400"
          cycle
          hide-delimiters
          show-arrows-on-hover
        >
          <v-carousel-item
            v-for="(news, index) in latestNews"
            :key="index"
          >
            <v-card :color="index % 2 === 0 ? 'primary' : 'secondary'" dark>
              <v-card-title>{{ news.title }}</v-card-title>
              <v-card-text>{{ news.content }}</v-card-text>
            </v-card>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>

    <!-- Features Section -->
    <v-row class="mt-5">
      <v-col cols="12">
        <h2 class="font-weight-bold mb-4">Features</h2>
      </v-col>

      <v-col v-for="(feature, index) in features" :key="index" cols="12" md="4">
        <v-card class="mb-4" outlined>
          <v-card-title>
            <v-icon left color="green darken-2">{{ feature.icon }}</v-icon>
            {{ feature.title }}
          </v-card-title>
          <v-card-text>{{ feature.description }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const latestNews = ref([
  { title: 'Smart Irrigation Now Available!', content: 'We have launched our new smart irrigation system, which adjusts watering schedules based on real-time weather data.' },
  { title: 'Greenhouse Automation Update', content: 'Our greenhouse automation now supports voice commands and integrates with smart home systems.' },
  { title: 'Mobile App Release', content: 'Control your garden from anywhere with our newly released mobile app!' }
]);

const features = ref([
  { title: 'Automated Watering', description: 'Automatically water your plants based on soil moisture and weather conditions.', icon: 'mdi-water' },
  { title: 'Robotic Greenhouses', description: 'Control temperature, humidity, and lighting with our robotic greenhouse solutions.', icon: 'mdi-robot' },
  { title: 'Smart Lawn Care', description: 'Keep your lawn healthy with automated mowing and fertilizing.', icon: 'mdi-grass' }
]);
</script>

<style scoped>
.hero-image {
  height: 300px;
  background-size: cover;
  background-position: center;
}

.v-carousel-item {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
