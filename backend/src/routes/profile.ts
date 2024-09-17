// src/routes/profile.ts
import express from 'express';
import { getProfile } from '../controllers/profileController';
import { verifyToken } from '../middleware/authMiddleware';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Profile
 *   description: API endpoints for user profile management
 */

/**
 * @swagger
 * /profile:
 *   get:
 *     summary: Get the authenticated user's profile
 *     tags: [Profile]
 *     security:
 *       - bearerAuth: []  # Use JWT token for authentication
 *     responses:
 *       200:
 *         description: Successfully retrieved user profile
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: The user's ID
 *                   example: 1
 *                 username:
 *                   type: string
 *                   description: The user's username
 *                   example: johndoe
 *                 email:
 *                   type: string
 *                   description: The user's email
 *                   example: johndoe@example.com
 *       401:
 *         description: Unauthorized - JWT token is missing or invalid
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Unauthorized
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Error fetching profile
 *                 error:
 *                   type: string
 *                   example: "Detailed error message"
 */
router.get('/', verifyToken, getProfile);

export default router;
