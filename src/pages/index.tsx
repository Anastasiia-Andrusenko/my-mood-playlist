import React from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.scss';

const Home = () => {
  return (
    <div className={styles.container}>
      <h1>Your Mood Playlist</h1>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/login">Login</Link>
          </li>
          <li>
            <Link href="/register">Register</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;

