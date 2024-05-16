import Link from 'next/link';
import React from 'react';
import styles from '../styles/Home.module.scss';
// import getConfig from 'next/config';

// const { publicRuntimeConfig } = getConfig();

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1>Welcome to My Mood Playlist</h1>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/login">
              Login
            </Link>
          </li>
          <li>
            <Link href="/register">
              Register
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;

