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

const { publicRuntimeConfig } = getConfig();
const basePath = publicRuntimeConfig.basePath || '';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
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
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('User logged in successfully');
      toast.success('User logged in successfully');
      router.push('/images');
    } catch (error: any) {

      console.error('Login error:', error.message);
      setError(error.message);
      toast.error(`Login failed: ${error}`);
    } finally {

      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      {loading && <Loader />}
      <h1>Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <label htmlFor="email" className={styles.label}>
            Email:
          </label>
          <input 
          className={styles.input}
            type="email"
            placeholder='email'
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="password" className={styles.label}>
            Password:
          </label>
          <input 
          className={styles.input}
            type="password"
            placeholder='password'
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
          />
        </div>      
        <button type="submit" className={styles.button}>Login</button>
      </form>
      <div>
        <button onClick={loginWithGoogle} className={styles.button}>
          Log in with Google
        </button>
        <button onClick={loginWithFacebook} className={styles.button}>
          Log in with Facebook
        </button>
      </div>
      <p>
        Don&apos;t have an account? <Link href={`/register`} passHref>Register</Link>
      </p>
    </div>
  );
};

export default withAuthRedirect(Login);
