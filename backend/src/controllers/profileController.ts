// src/controllers/profileController.ts
import { Request, Response } from 'express';
import db from '../db/connection';

export const getProfile = async (req: Request, res: Response): Promise<void> => {
  const userId = (req as any).user.userId; // TypeScript workaround for custom properties

  try {
    const [rows] = await db.execute('SELECT id, username, email FROM users WHERE id = ?', [userId]);

    if (!Array.isArray(rows) || rows.length === 0) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching profile', error });
  }
};
