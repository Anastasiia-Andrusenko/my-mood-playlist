import React, { useEffect, useState } from 'react';
import { 
  createUserWithEmailAndPassword, 
  GoogleAuthProvider,
  FacebookAuthProvider, 
  signInWithPopup, 
  UserCredential,
  updateProfile 
} from 'firebase/auth';
import { auth } from '../utils/firebaseConfig';
import styles from '../styles/Register.module.scss';
import getConfig from 'next/config';
import { useRouter } from 'next/router';
import Loader from '../components/Loader/Loader';
import { toast } from 'react-toastify';
import withAuthRedirect from '../components/withAuthRedirect';

const { publicRuntimeConfig } = getConfig();
const basePath = publicRuntimeConfig.basePath || '';

const Register: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [nickname, setNickname] = useState<string>('');
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

  

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Зберігаємо nickname в профілі користувача
      if (user) {
        await updateProfile(user, {
          displayName: nickname
        });
      };
      console.log('User registered successfully');
      toast.success('User registered successfully');
      router.push('/images');
    } catch (error: any) {

      console.error('Login error:', error.message);
      setError(error.message);
      toast.error(`Registration failed: ${error.message}`);
    } finally {
      
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      {loading && <Loader />}
      <h1>Register</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <label htmlFor="email" className={styles.label}>Email:</label>
          <input
          className={styles.input}
            type="email"
            placeholder="Email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="password" className={styles.label}>Password:</label>
          <input
          className={styles.input}
            type="password"
            placeholder="Password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="email" className={styles.label}>Nickname:</label>
          <input
          className={styles.input}
            type="text"
            placeholder="Nickname"
            id='nickname'
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            required
          />
        </div>
        <button type="submit" className={styles.button}>Register</button>
      </form>
      <div>
        <button onClick={loginWithGoogle} className={styles.button}>
          Log in with Google
        </button>
        <button onClick={loginWithFacebook} className={styles.button}>
          Log in with Facebook
        </button>
      </div>
    </div>
  );
};

export default withAuthRedirect(Register);

