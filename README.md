
# Demos

Welcome to the **Demos** repository! This project showcases a garden automation application that includes both a frontend and a backend. The application aims to automate various gardening tasks, from watering the lawn to controlling robotic greenhouses.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
    - [Backend Setup](#backend-setup)
    - [Frontend Setup](#frontend-setup)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Authentication**: Register and log in to access personalized features.
- **User Profile**: View and manage your personal profile and active garden modules.
- **Home View**: Display the latest news and features of the garden automation system.
- **Shop**: Browse and purchase additional garden automation modules.
- **Responsive Design**: UI built with Vuetify to ensure responsiveness across devices.
- **API Documentation**: Interactive API documentation using Swagger UI.
- **Database Integration**: Persistent data storage using MySQL.

## Technologies Used

### Frontend

- **Vue 3**: Progressive JavaScript framework for building user interfaces.
- **Pinia**: State management library for Vue.
- **Axios**: Promise-based HTTP client for making API requests.
- **Vuetify**: Material Design component framework.
- **TypeScript**: Typed superset of JavaScript that compiles to plain JavaScript.
- **Vite**: Next-generation frontend tooling for faster builds.

### Backend

- **Node.js**: JavaScript runtime built on Chrome's V8 engine.
- **Express**: Fast, unopinionated, minimalist web framework for Node.js.
- **MySQL**: Relational database management system.
- **Swagger**: API documentation and design tool.
- **TypeScript**: Adds static typing to JavaScript.
- **bcrypt**: Library for hashing passwords.
- **JWT**: JSON Web Tokens for secure authentication.

## Getting Started

### Prerequisites

- **Node.js** (v14 or later) and **npm**
- **MySQL** server
- **Git** (optional, for cloning the repository)

### Installation

#### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/demos.git
cd demos
```

Replace `yourusername` with your GitHub username if applicable.

#### Backend Setup

##### Navigate to the Backend Directory

```bash
cd backend
```

##### Install Backend Dependencies

```bash
npm install
```

##### Configure Environment Variables

Create a `.env` file in the `backend` directory with the following content:

```env
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=garden_automation
JWT_SECRET=your_jwt_secret
```

- Replace `your_mysql_password` with your MySQL root password or the password of the user you intend to use.
- Replace `your_jwt_secret` with a secret key for JWT token signing.

##### Set Up the MySQL Database

Log in to your MySQL server and run the following commands:

```sql
CREATE DATABASE garden_automation;

USE garden_automation;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL
);
```

##### Start the Backend Server

```bash
npm run dev
```

The backend server should now be running at `http://localhost:3000`.

#### Frontend Setup

##### Navigate to the Frontend Directory

Open a new terminal window and navigate to the frontend directory:

```bash
cd frontend
```

##### Install Frontend Dependencies

```bash
npm install
```

##### Configure Environment Variables (Optional)

If you need to set environment variables for the frontend, create an `.env` file in the `frontend` directory.

##### Start the Frontend Development Server

```bash
npm run dev
```

The frontend application should now be running at `http://localhost:8080`.

## Usage

- **Access the Application**: Open your web browser and navigate to `http://localhost:8080`.
- **Register a New User**: Click on the **Register** link in the navigation bar to create a new account.
- **Login**: After registering, log in using your credentials.
- **Explore Features**: Navigate through the **Home**, **Profile**, and **Shop** pages to explore the application's features.
- **API Interaction**: The frontend communicates with the backend API for authentication and data retrieval.

## API Documentation

The backend API is documented using Swagger UI.

- **Access the API Docs**: Navigate to `http://localhost:3000/api-docs` in your web browser.
- **Interactive Testing**: Use the Swagger UI to interact with the API endpoints directly.
- **Endpoints Covered**:
  - **Authentication**: Register and login endpoints.
  - **Profile**: Retrieve user profile information.

## Project Structure

```
demos/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── api/
│   │   │   ├── axiosInstance.ts
│   │   │   ├── authRepository.ts
│   │   │   └── profileRepository.ts
│   │   ├── components/
│   │   ├── plugins/
│   │   │   └── vuetify.ts
│   │   ├── views/
│   │   │   ├── HomeView.vue
│   │   │   ├── LoginView.vue
│   │   │   ├── RegisterView.vue
│   │   │   ├── ProfileView.vue
│   │   │   └── ShopView.vue
│   │   ├── App.vue
│   │   ├── main.ts
│   │   └── router.ts
│   ├── .env (optional)
│   ├── package.json
│   └── vite.config.ts
└── backend/
    ├── src/
    │   ├── controllers/
    │   │   ├── authController.ts
    │   │   └── profileController.ts
    │   ├── db/
    │   │   └── connection.ts
    │   ├── middleware/
    │   │   └── authMiddleware.ts
    │   ├── routes/
    │   │   ├── auth.ts
    │   │   └── profile.ts
    │   ├── server.ts
    │   └── swagger-config.js
    ├── .env
    ├── package.json
    └── tsconfig.json
```

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, feel free to open an issue or submit a pull request.

### Steps to Contribute

1. **Fork the Repository**
2. **Create a Feature Branch**

   ```bash
   git checkout -b feature/YourFeature
   ```

3. **Commit Your Changes**

   ```bash
   git commit -m "Add your message here"
   ```

4. **Push to Your Branch**

   ```bash
   git push origin feature/YourFeature
   ```

5. **Open a Pull Request**

## License

This project is licensed under the [MIT License](LICENSE).

---

Feel free to reach out if you have any questions or need assistance getting started with the project. Happy coding!
