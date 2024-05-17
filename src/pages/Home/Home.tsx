
// Home.tsx
// 

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import styles from './Home.module.scss';
import getConfig from 'next/config';
import { auth } from '../../utils/firebaseConfig';
import { signOut } from 'firebase/auth';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { handleLogout } from '../../services/authService';
import useAuthState from '../../hooks/useAuthState';
import SlideShow from '../../components/SlideShow/SlideShow';
import Footer from '../../components/Footer/Footer';

const { publicRuntimeConfig } = getConfig();
const basePath = publicRuntimeConfig.basePath || '';

const Home: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsLoggedIn(!!user);
    });

    return () => unsubscribe();
  }, [router]);

  const onLogout = async () => {
    const result = await handleLogout();
    if (result.success) {
      toast.warning('You logged out');
      router.push('/');
    }
  };

  return (
    <div className={styles.container}>
      <SlideShow text='listen to your heart'/>
      <p className={styles.text}>Your life is like the best fucking movie! <br/>
        The background changes, characters appear, 
        yesterday you were crying, and now you are laughing. 
        What can add spice to this moment? Yes. <br/>
        A perfectly fitting soundtrack
      </p>

      <h1 className={styles.title}>listen to music that perfectly matches your mood</h1>
      
      {isLoggedIn ? (
        <div className={styles.loggedIn}>
          <p>You are already logged in.</p>
          <button onClick={onLogout}>Logout</button>
        </div>
      ) : ( <>
      <p className={styles.please}>Please log in to access all features.</p>
      <nav className={styles.nav}>
          <ul>
            <li>
              <Link href={`/login`} passHref>
                Login
              </Link>
            </li>
            <li>
              <Link href={`/register`} passHref>
                Register
              </Link>
            </li>
          </ul>
        </nav>
      </>
      )}
      <Footer/>
    </div>
  );
};

export default Home;

