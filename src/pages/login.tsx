import Link from 'next/link';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebaseConfig';
import styles from '../styles/Login.module.scss';
import { useState } from 'react';
import { useRouter } from 'next/router';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');



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
      <p>
        Don&apos;t have an account? <Link href="/register">Register</Link>
      </p>
    </div>
  );
};

export default Login;
