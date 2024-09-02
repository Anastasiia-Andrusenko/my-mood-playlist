
// 
// playlist

import React, { Suspense, useEffect, useState } from 'react';
import styles from './Playlist.module.scss';
import useAuthStateWithRedirect from '../../hooks/useAuthStateWithRedirect';
import Image from 'next/image';
import { useRouter } from 'next/router';
import YouTubePlayerWrapper from '../../components/YouTubePlayer/YouTubePlayerWrapper';
import { fetchPlaylistItems } from '../../services/youtubeService';
import Loader from '../../components/Loader/Loader';
import { auth, db } from '../../utils/firebaseConfig'; // Імпорт Firebase конфігурації
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore"; 
import { SlLike } from "react-icons/sl";
import { RiPlayListFill } from "react-icons/ri";
import { TbPlaylistOff } from "react-icons/tb";
import HeaderWrapper from '../../components/Header/HeaderWrapper';
import FooterWrapper from '../../components/Footer/FooterWrapper';
import { toast } from 'react-toastify';




const PlaylistPage = () => {
  const nickname = useAuthStateWithRedirect();
  const router = useRouter();
  const { imgUrl, description, playlistId } = router.query as { imgUrl: string; description: string; playlistId: string };
  const [playlistItems, setPlaylistItems] = useState<any[]>([]);
  const [userId, setUserId] = useState<string | null>(null);
  const [listOpen, setListOpen] = useState(false);

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


  const handleLike = async (playlistId: string, imgUrl: string) => {
    if (!userId) {
      toast.success("Please log in to save your favorite playlists.");
      return;
    }
  
    const playlistDocRef = doc(db, 'users', userId, 'favorites', playlistId);
  
    try {
      const playlistDoc = await getDoc(playlistDocRef);
      if (playlistDoc.exists()) {
        toast.warn('This playlist is already in your favorites!');
      } else {
        await setDoc(playlistDocRef, {
          playlistId: playlistId,
          timestamp: serverTimestamp(),
          url: imgUrl
        });
        toast.success('Playlist added to favorites!');
      }
    } catch (error) {
      console.error('Error adding playlist to favorites: ', error);
    }
  };
  
  const toggleTrackList = () => {
    setListOpen((prev) => !prev);
    console.log(listOpen);
  };


  return (
    <div className={styles.pageContainer}>
      <HeaderWrapper nickname={nickname} page={'playlist'}/>
      <div className={styles.backgroundImage} style={{ backgroundImage: `url(${imgUrl})` }}>
        <div className={styles.contentWrapper}>
          <main className={styles.container}>
            <h2 className={styles.title}>listen and enjoy</h2>
            <p className={styles.description}>Here you can listen to the playlist that we created especially for your mood.</p>
              <div className={styles.content}>
                <div className={styles.playerContainer}>
                  {playlistId && <YouTubePlayerWrapper playlistId={playlistId} />}
                  <div className={styles.btnContainer}>
                    <div className={styles.tooltipBtn}>
                      <button className={styles.toggle} onClick={toggleTrackList}> {listOpen ? <TbPlaylistOff /> : <RiPlayListFill />}</button>
                      <span className={styles.tooltipTextBtn}>{listOpen ? `Hide track list` : `Show track list`}</span>
                    </div>
                    <div className={styles.likeButton}>
                      <div className={styles.tooltip} onClick={()=> handleLike(playlistId, imgUrl)}>
                        <SlLike />
                        <span className={styles.tooltipText}>Add to favorites</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.listContainer}>
                  {listOpen && <ul className={styles.list}>
                  {playlistItems.map((item, index) => (
                      <li key={index} className={styles.item}>
                        {item.snippet.title}
                      </li>
                    ))}
                  </ul>}
                </div>
              </div>
          </main>
        </div>
      </div>
      <FooterWrapper/>
    </div>
  );
};

export default PlaylistPage;
