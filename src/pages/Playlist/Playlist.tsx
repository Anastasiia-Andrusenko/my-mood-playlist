
// 
// playlist

import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import styles from './Playlist.module.scss';
import useAuthStateWithRedirect from '../../hooks/useAuthStateWithRedirect';
import Image from 'next/image';
import { useRouter } from 'next/router';
import YouTubePlayer from '../../components/YouTubePlayer/YouTubePlayer';
import { fetchPlaylistItems } from '../../services/youtubeService';

const PlaylistPage = ({imgIndex}) => {
  const nickname = useAuthStateWithRedirect();
  const router = useRouter();
  const { imgUrl, description, playlistId } = router.query;
  const [playlistItems, setPlaylistItems] = useState([]);

  useEffect(() => {
    if (playlistId) {
      const loadPlaylistItems = async () => {
        try {
          const items = await fetchPlaylistItems(playlistId);
          setPlaylistItems(items);
        } catch (error) {
          console.error("Error fetching playlist items: ", error);
        }
      };
      loadPlaylistItems();
    }
  }, [playlistId]);



  return (
    <div>
      <Header nickname={nickname} />
      <main className={styles.container}>
        <h2 className={styles.title}>your choice of mood</h2>
        <div className={styles.content}>
          <div className={styles.listContainer}>
            <ul className={styles.list}>
            {playlistItems.map((item, index) => (
                <li key={index} className={styles.item}>
                  {item.snippet.title}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.ImgPlay}>
            <div className={styles.imgWrapper}>
            {imgUrl && (
              <Image
                width={500}
                height={500}
                src={imgUrl as string}
                alt="Selected image"
                className={styles.img}
                priority={true}
              />
            )}
            <div className={styles.overlay}>
              <p className={styles.description}>{description}</p>
            </div>
            </div>
            <div className={styles.playerContainer}>
              {playlistId && <YouTubePlayer playlistId={playlistId} />}
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
};

export default PlaylistPage;
