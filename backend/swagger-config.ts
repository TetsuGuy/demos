// swagger-config.js
const swaggerJSDoc = require('swagger-jsdoc');

// Swagger definition
const swaggerDefinition = {
  openapi: '3.0.0', // Specify OpenAPI version
  info: {
    title: 'Garden Automation API', // Title of the API
    version: '1.0.0', // Version of the API
    description: 'API documentation for the Garden Automation project',
  },
  servers: [
    {
      url: 'http://localhost:3000', // Replace with your server URL
      description: 'Development server',
    },
  ],
};

// Options for swagger-jsdoc
const options = {
  swaggerDefinition,
  apis: ['./src/routes/*.js', './src/routes/*.ts'], // Path to the API docs
};

// Initialize swagger-jsdoc
const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
