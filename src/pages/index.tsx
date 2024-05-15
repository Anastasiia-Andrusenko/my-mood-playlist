import React from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.scss';

const Home = () => {
  return (
    <div className={styles.container}>
      <h1>This is My Mood Playlist</h1>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/my-mood-playlist/login">Login</Link>
          </li>
          <li>
            <Link href="//my-mood-playlist/login">Register</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;


