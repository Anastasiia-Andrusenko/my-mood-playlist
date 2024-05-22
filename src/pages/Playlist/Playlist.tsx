import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import styles from './Playlist.module.scss';
import useAuthStateWithRedirect from '../../hooks/useAuthStateWithRedirect';
import Image from 'next/image';

const PlaylistPage = ({imgIndex}) => {
  const nickname = useAuthStateWithRedirect();


  return (
    <div>
      <Header nickname={nickname} />
      <main className={styles.container}>
        <h2 className={styles.title}>your choice of mood</h2>
        <div className={styles.content}>
        <div className={styles.listContainer}>
          <ul className={styles.list}>
            <li className={styles.item}>item</li>
          </ul>
        </div>
        <div className={styles.imgWrapper}>
          <Image  width={300} height={300} src={''} alt={`Image`} className={styles.img} priority={true}/>
          <div className={styles.overlay}>
            <p className={styles.description}> description</p>
          </div>
        </div>
        </div>
        <div className={styles.playerContainer}>
          player
        </div>
      </main>
      <Footer/>
    </div>
  );
};

export default PlaylistPage;

