// src/server.ts
import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors'; // Import cors
import authRoutes from './routes/auth';
import profileRoutes from './routes/profile';

dotenv.config();
const app = express();

app.use(bodyParser.json());

// Enable CORS for localhost
app.use(cors({
  origin: 'http://localhost:8080', // Replace with your frontend URL
  credentials: true, // Allow cookies and credentials
}));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/profile', profileRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
