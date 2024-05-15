import Link from 'next/link';
import { 
  signInWithEmailAndPassword, 
  GoogleAuthProvider,
  FacebookAuthProvider, 
  signInWithPopup, 
  UserCredential 
} from 'firebase/auth';
import { auth } from '../../firebaseConfig';
import styles from '../styles/Login.module.scss';
import { useState } from 'react';

const Login: React.FC = ()=> {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const loginWithGoogle = async (): Promise<void> => {
    const provider = new GoogleAuthProvider();
    try {
      const result: UserCredential = await signInWithPopup(auth, provider);
      console.log(result.user); // Виведення інформації користувача
    } catch (error: any) {
      console.error('Google login error:', error.message);
    }
  };
  
  const loginWithFacebook = async (): Promise<void> => {
    const provider = new FacebookAuthProvider();
    try {
      const result: UserCredential = await signInWithPopup(auth, provider);
      console.log(result.user); // Виведення інформації користувача
    } catch (error: any) {
      console.error('Facebook login error:', error.message);
    }
  };
  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Перенаправлення або інші дії після успішного логіну
      console.log('User logged in successfully');
    } catch (err: any) {
      setError(err.message);
    }
  };
  return (
    <div className={styles.container}>
      <h1>Login</h1>
      {error && <p className={styles.error}>{error}</p>}
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <label className={styles.label}>
              Email:
          </label>
          <input 
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required />
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label}>
            Password:
          </label>
          <input 
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required/>
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
        Don&apos;t have an account? <Link href="/register">Register</Link>
      </p>
    </div>
  );
};

export default Login;
