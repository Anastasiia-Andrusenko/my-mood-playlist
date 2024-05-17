
// register.tsx
// 

import React, { useEffect, useState } from 'react';
import { 
  createUserWithEmailAndPassword, 
  GoogleAuthProvider,
  FacebookAuthProvider, 
  signInWithPopup, 
  UserCredential,
  updateProfile 
} from 'firebase/auth';
import { auth } from '../../utils/firebaseConfig';
import styles from './Register.module.scss';
import getConfig from 'next/config';
import { useRouter } from 'next/router';
import Loader from '../../components/Loader/Loader';
import { toast } from 'react-toastify';
import withAuthRedirect from '../../components/withAuthRedirect';
import AuthForm from '../../components/Auth/AuthForm';
import AuthButton from '../../components/Auth/AuthButton';

const { publicRuntimeConfig } = getConfig();
const basePath = publicRuntimeConfig.basePath || '';

const Register: React.FC = () => {
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [nickname, setNickname] = useState('');
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
    } catch (error: any) {
      console.error('Facebook login error:', error.message);
      setError(error.message);
    }
  };

  

  const handleSubmit = async (email: string, password: string, nickname: string) => {
    setLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('User before updateProfile:', user);


      if (user) {
        await updateProfile(user, {
          displayName: nickname
        });
        console.log('Profile updated:', user.displayName);
      };
      toast.success('User registered successfully');
      router.push('/images');

    } catch (error: any) {
      setError(error.message);
      toast.error(`Registration failed: ${error.message}`);

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      {loading && <Loader />}
      <AuthForm title="Register"
        buttonText="Register"
        onSubmit={handleSubmit}
        showNickname={true} 
      />
      <div>
        <AuthButton onClick={loginWithGoogle} text="Log in with Google" />
        <AuthButton onClick={loginWithFacebook} text="Log in with Facebook" />
      </div>
    </div>
  );
};

export default withAuthRedirect(Register);

