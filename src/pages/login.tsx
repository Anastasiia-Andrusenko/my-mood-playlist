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
import { useState } from 'react';
import getConfig from 'next/config';
import { useRouter } from 'next/router';

const { publicRuntimeConfig } = getConfig();
const basePath = publicRuntimeConfig.basePath || '';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const router = useRouter();

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
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('User logged in successfully');
      router.push('/images');
    } catch (error: any) {
      console.error('Login error:', error.message);
      setError(error.message);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Login</h1>
      {error && <p className={styles.error}>{error}</p>}
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <label htmlFor="email" className={styles.label}>
            Email:
          </label>
          <input 
            type="email"
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
            type="password"
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
        Don&apos;t have an account? <Link href={`${basePath}/register`} passHref>Register</Link>
      </p>
    </div>
  );
};

export default Login;
