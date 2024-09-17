// src/routes/profile.ts
import express from 'express';
import { getProfile } from '../controllers/profileController';
import { verifyToken } from '../middleware/authMiddleware';

const router = express.Router();

router.get('/', verifyToken, getProfile);

export default router;
