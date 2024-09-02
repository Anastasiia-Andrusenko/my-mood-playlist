
// 
// services/authService.ts

import { auth } from '../utils/firebaseConfig';
import { signOut } from 'firebase/auth';
import { 
  signInWithEmailAndPassword, 
  GoogleAuthProvider, 
  FacebookAuthProvider, 
  signInWithPopup, 
  UserCredential 
} from 'firebase/auth';

export const handleLogout = async () => {
  try {
    await signOut(auth);
    return { success: true };
  } catch (error) {
    console.error('Error signing out: ', error);
    return { success: false, error };
  }
};


export const loginWithGoogle = async (): Promise<UserCredential> => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    return result;
  } catch (error: any) {
    console.error('Google login error:', error.message);
    throw error;
  }
};

export const loginWithFacebook = async (): Promise<UserCredential> => {
  const provider = new FacebookAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    return result;
  } catch (error: any) {
    console.error('Facebook login error:', error.message);
    throw error;
  }
};

export const handleLogin = async (email: string, password: string): Promise<void> => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error: any) {
    console.error('Email login error:', error.message);
    throw error;
  }
};
