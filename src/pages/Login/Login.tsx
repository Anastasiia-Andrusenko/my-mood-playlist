
// login.tsx
// 
import Link from 'next/link';
import { auth } from '../../utils/firebaseConfig';
import styles from './Login.module.scss';
import React, { useState, useEffect } from 'react';
import getConfig from 'next/config';
import { useRouter } from 'next/router';
import Loader from '../../components/Loader/Loader';
import { toast } from 'react-toastify';
// import withAuthRedirect from '../../components/withAuthRedirect';
import AuthButton from '../../components/Auth/AuthButton';
import AuthForm from '../../components/Auth/AuthForm';
import useAuthState from '../../hooks/useAuthState';
import { loginWithGoogle, loginWithFacebook, handleLogin } from '../../services/authService';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const { publicRuntimeConfig } = getConfig();
const basePath = publicRuntimeConfig.basePath || '';

const Login: React.FC = () => {
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const isLoggedIn = useAuthState();
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        router.push('/');
      }
    });
    return () => unsubscribe();
  }, [router]);

  const onLoginWithGoogle = async () => {
    setLoading(true);
    try {
      const result = await loginWithGoogle();
      console.log(result.user); // Виведення інформації користувача
      router.push('/images'); // Перенаправлення після успішного входу
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const onLoginWithFacebook = async () => {
    setLoading(true);
    try {
      const result = await loginWithFacebook();
      console.log(result.user); // Виведення інформації користувача
      router.push('/images'); // Перенаправлення після успішного входу
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const onHandleLogin = async (email: string, password: string) => {
    setLoading(true);
    try {
      await handleLogin(email, password);
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
    <div>
    <Header nickname='' page={''}/>
    <div className={styles.container}>
      {loading && <Loader />}
      <h2 className={styles.please}>Please log in to access all features</h2>
      <div className={styles.overlay}></div>
      <div className={styles.form}>
      <AuthForm 
        title=""
        buttonText="Login"
        onSubmit={onHandleLogin}
        showNickname={false} 
      />
      <div>
        <AuthButton onClick={onLoginWithGoogle} text="Log in with Google" />
        {/* <AuthButton onClick={onLoginWithFacebook} text="Log in with Facebook" /> */}
      </div>
      <p>
        Don&apos;t have an account? <Link href={`/register`} className={styles.link} passHref>Register</Link>
      </p>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Login;
