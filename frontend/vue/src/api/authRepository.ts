// src/api/authRepository.ts
import axiosInstance from './axiosInstance';

// Define the user data types for type safety
interface RegisterData {
  username: string;
  email: string;
  password: string;
}

interface LoginData {
  email: string;
  password: string;
}

interface AuthResponse {
  token: string;
}

// Register a new user
export const register = async (data: RegisterData): Promise<void> => {
  try {
    const response = await axiosInstance.post('/auth/register', data);
    console.log(response.data);
  } catch (error) {
    console.error('Registration failed:', error);
    throw error;
  }
};

// Login a user
export const login = async (data: LoginData): Promise<AuthResponse> => {
  try {
    const response = await axiosInstance.post<AuthResponse>('/auth/login', data);
    const token = response.data.token;
    localStorage.setItem('token', token); // Store the token in local storage
    return response.data;
  } catch (error) {
    console.error('Login failed:', error);
    throw error;
  }
};

// Logout a user
export const logout = (): void => {
  localStorage.removeItem('token'); // Remove the token from local storage
};
