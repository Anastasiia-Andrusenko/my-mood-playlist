
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
      <h1>Welcome to My Mood Playlist</h1>
      {isLoggedIn ? (
        <div className={styles.loggedIn}>
          <p>You are already logged in.</p>
          <button onClick={onLogout}>Logout</button>
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
