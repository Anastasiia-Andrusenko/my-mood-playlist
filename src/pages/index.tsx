
// index.tsx
// 

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import styles from '../styles/Home.module.scss';
import getConfig from 'next/config';
import { auth } from '../utils/firebaseConfig';
import { signOut } from 'firebase/auth';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import withAuthRedirect from '../components/withAuthRedirect';

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
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.warning('You logged out');
      router.push('/');
    } catch (error) {
      console.error('Error signing out: ', error);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Welcome to My Mood Playlist</h1>
      {isLoggedIn ? (
        <div className={styles.loggedIn}>
          <p>You are already logged in.</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : ( <>
      <p>Please log in to access all features.</p>
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
    </div>
  );
};

export default Home;
