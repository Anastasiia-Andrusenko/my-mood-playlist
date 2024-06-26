
// register.tsx
// 

import React, { useEffect, useState } from 'react';
import { 
  createUserWithEmailAndPassword, 
  GoogleAuthProvider,
  FacebookAuthProvider, 
  signInWithPopup, 
  UserCredential,
  updateProfile,
  sendEmailVerification,  
} from 'firebase/auth';
import { auth } from '../../utils/firebaseConfig';
import styles from './Register.module.scss';
import getConfig from 'next/config';
import { useRouter } from 'next/router';
import Loader from '../../components/Loader/Loader';
import { toast } from 'react-toastify';
// import withAuthRedirect from '../../components/withAuthRedirect';
import AuthForm from '../../components/Auth/AuthForm';
import AuthButton from '../../components/Auth/AuthButton';
import Link from 'next/link';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const { publicRuntimeConfig } = getConfig();
const basePath = publicRuntimeConfig.basePath || '';

const Register: React.FC = () => {
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
    setLoading(true);
    const provider = new GoogleAuthProvider();
    try {
      const result: UserCredential = await signInWithPopup(auth, provider);
      console.log(result.user); // Виведення інформації користувача
    } catch (error: any) {
      console.error('Google login error:', error.message);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  
  const loginWithFacebook = async (): Promise<void> => {
    setLoading(true);
    const provider = new FacebookAuthProvider();
    try {
      const result: UserCredential = await signInWithPopup(auth, provider);
      console.log(result.user); // Виведення інформації користувача
    } catch (error: any) {
      console.error('Facebook login error:', error.message);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  

  const handleSubmit = async (email: string, password: string, nickname: string) => {
    setLoading(true);

    try {
      const userCredential: UserCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('User before updateProfile:', user);

      await updateProfile(user, { displayName: nickname });

      console.log('Sending email verification...');
      await sendEmailVerification(user);
      console.log('Email verification sent');

      toast.warn('Please verify your email address before proceeding.');

      router.push('/login');
    } catch (error: any) {
      setError(error.message);
      toast.error(`Registration failed: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <Header nickname={''} page={''}/>
    <div className={styles.container}>
       <div className={styles.overlay}></div>
       <h2 className={styles.please}>Please register to access all features</h2>
       <div className={styles.form}>
       {loading && <Loader />}
      <AuthForm title=""
        buttonText="Register"
        onSubmit={handleSubmit}
        showNickname={true} 
      />
      <p>
        Already have an account? Then <Link href={`/login`} className={styles.link} passHref>Log in</Link>
      </p>
      <div>
        <AuthButton onClick={loginWithGoogle} text="Log in with Google" />
        {/* <AuthButton onClick={loginWithFacebook} text="Log in with Facebook" /> */}
      </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Register;

