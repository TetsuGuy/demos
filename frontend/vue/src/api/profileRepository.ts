// src/api/profileRepository.ts
import axiosInstance from './axiosInstance';

// Define the profile data type
interface ProfileData {
  id: number;
  username: string;
  email: string;
}

// Get the user's profile
export const getProfile = async (): Promise<ProfileData> => {
  try {
    const response = await axiosInstance.get<ProfileData>('/profile');
    return response.data;
  } catch (error) {
    console.error('Failed to fetch profile:', error);
    throw error;
  }
};
