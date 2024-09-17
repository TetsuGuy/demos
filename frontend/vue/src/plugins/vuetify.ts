// src/plugins/vuetify.ts
import { createVuetify } from 'vuetify'
import 'vuetify/styles' // Import Vuetify styles

// Define your custom theme
const customTheme = {
  colors: {
    primary: '#4CAF50', // Green color as primary
  },
}

// Create a Vuetify instance with a custom theme
const vuetify = createVuetify({
  theme: {
    defaultTheme: 'customTheme',
    themes: {
      customTheme: {
        colors: customTheme.colors,
      },
    },
  },
})

export default vuetify
