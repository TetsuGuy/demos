// src/controllers/authController.ts
import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import db from '../db/connection';

const JWT_SECRET = process.env.JWT_SECRET as string;

// User Registration
export const register = async (req: Request, res: Response): Promise<void> => {
  const { username, password, email } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    await db.execute(
      'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
      [username, email, hashedPassword]
    );
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error registering user', error });
  }
};

// User Login
export const login = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;

  console.log(req.body);

  try {
    const [rows] = await db.execute('SELECT * FROM users WHERE email = ?', [email]);

    if (!Array.isArray(rows) || rows.length === 0) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    const user = rows[0] as any; // TypeScript workaround for row data packet
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      res.status(401).json({ message: 'Invalid password' });
      return;
    }

    const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Error logging in', error });
  }
};
