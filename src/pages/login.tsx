
// login.tsx
// 

import Link from 'next/link';
import { 
  signInWithEmailAndPassword, 
  GoogleAuthProvider,
  FacebookAuthProvider, 
  signInWithPopup, 
  UserCredential 
} from 'firebase/auth';
import { auth } from '../utils/firebaseConfig';
import styles from '../styles/Login.module.scss';
import React, { useState, useEffect } from 'react';
import getConfig from 'next/config';
import { useRouter } from 'next/router';
import Loader from '../components/Loader/Loader';
import { toast } from 'react-toastify';
import withAuthRedirect from '../components/withAuthRedirect';
import AuthButton from '../components/Auth/AuthButton';
import AuthForm from '../components/Auth/AuthForm';

const { publicRuntimeConfig } = getConfig();
const basePath = publicRuntimeConfig.basePath || '';

const Login: React.FC = () => {
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        router.push('/');
      }
    });
    return () => unsubscribe();
  }, [router]);

  const loginWithGoogle = async (): Promise<void> => {
    const provider = new GoogleAuthProvider();
    try {
      const result: UserCredential = await signInWithPopup(auth, provider);
      console.log(result.user); // Виведення інформації користувача
      router.push('/images'); // Перенаправлення після успішного входу
    } catch (error: any) {
      console.error('Google login error:', error.message);
      setError(error.message);
    }
  };
  
  const loginWithFacebook = async (): Promise<void> => {
    const provider = new FacebookAuthProvider();
    try {
      const result: UserCredential = await signInWithPopup(auth, provider);
      console.log(result.user); // Виведення інформації користувача
      router.push('/images'); // Перенаправлення після успішного входу
    } catch (error: any) {
      console.error('Facebook login error:', error.message);
      setError(error.message);
    }
  };
  
  const handleLogin = async (email: string, password: string) => {
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success('User logged in successfully');
      router.push('/images');
    } catch (error: any) {
      setError(error.message);
      toast.error(`Login failed: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className={styles.container}>
      {loading && <Loader />}
      <AuthForm 
        title="Login"
        buttonText="Login"
        onSubmit={handleLogin}
        showNickname={false} 
      />
      <div>
        <AuthButton onClick={loginWithGoogle} text="Log in with Google" />
        <AuthButton onClick={loginWithFacebook} text="Log in with Facebook" />
      </div>
      <p>
        Don&apos;t have an account? <Link href={`/register`} passHref>Register</Link>
      </p>
    </div>
  );
};

export default withAuthRedirect(Login);
