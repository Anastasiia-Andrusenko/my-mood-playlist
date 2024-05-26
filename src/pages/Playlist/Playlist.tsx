
// 
// playlist

import React, { Suspense, useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import styles from './Playlist.module.scss';
import useAuthStateWithRedirect from '../../hooks/useAuthStateWithRedirect';
import Image from 'next/image';
import { useRouter } from 'next/router';
import YouTubePlayer from '../../components/YouTubePlayer/YouTubePlayer';
import { fetchPlaylistItems } from '../../services/youtubeService';
import Loader from '../../components/Loader/Loader';
import { auth, db } from '../../utils/firebaseConfig'; // Імпорт Firebase конфігурації
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore"; 
import { SlLike } from "react-icons/sl";

const PlaylistPage = () => {
  const nickname = useAuthStateWithRedirect();
  const router = useRouter();
  const { imgUrl, description, playlistId } = router.query as { imgUrl: string; description: string; playlistId: string };
  const [playlistItems, setPlaylistItems] = useState<any[]>([]);
  const [userId, setUserId] = useState<string | null>(null);

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

  useEffect(() => {
    // Отримання ідентифікатора користувача
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        setUserId(null);
      }
    });

    return () => unsubscribe();
  }, []);


  const handleLike = async () => {
    if (!userId) {
      alert("Please log in to save your favorite playlists.");
      return;
    }
  
    const playlistDocRef = doc(db, 'users', userId, 'favorites', playlistId);
  
    try {
      const playlistDoc = await getDoc(playlistDocRef);
  
      if (playlistDoc.exists()) {
        alert('This playlist is already in your favorites!');
      } else {
        await setDoc(playlistDocRef, {
          playlistId: playlistId,
          timestamp: serverTimestamp()
        });
        alert('Playlist added to favorites!');
      }
    } catch (error) {
      console.error('Error adding playlist to favorites: ', error);
    }
  };
  


  return (
    <div>
      <Header nickname={nickname} page={'playlist'}/>
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
              {/* <p className={styles.description}>{description}</p> */}
            </div>
      </div>
      <Suspense fallback={<Loader/>}>
      <main className={styles.container}>
        <h2 className={styles.title}>listen and enjoy</h2>
        <p className={styles.description}>Here you can listen to the playlist that we created especially for your mood.</p>
        <div className={styles.content}>
          <div className={styles.playerContainer}>
            {playlistId && <YouTubePlayer playlistId={playlistId} />}
            <div className={styles.likeButton}>
              <div className={styles.tooltip} onClick={handleLike}>
                <SlLike />
                <span className={styles.tooltipText}>Add to favorites</span>
              </div>
            </div>
          </div>
          <div className={styles.listContainer}>
            <ul className={styles.list}>
            {playlistItems.map((item, index) => (
                <li key={index} className={styles.item}>
                  {item.snippet.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
        
      </main>
      </Suspense>
      <Footer/>
    </div>
  );
};

export default PlaylistPage;
