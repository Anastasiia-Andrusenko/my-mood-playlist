import React, { useEffect, useState } from 'react';
import { collection, query, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../utils/firebaseConfig';
import { useAuth } from '../../context/AuthContext';
import Image from 'next/image';
import styles from './FavoritesPlaylists.module.scss';
import { MdDelete } from "react-icons/md";
import { PiListHeartDuotone } from "react-icons/pi";
import { TfiClose } from "react-icons/tfi";
import Link from 'next/link';
import Loader from '../Loader/Loader';

interface Playlist {
  id: string;
  playlistId: string;
  timestamp: string;
  url: string;
}

const FavoritesPlaylists: React.FC = () => {
  const { currentUser } = useAuth();
  const [favorites, setFavorites] = useState<Playlist[]>([]);
  const [loading, setLoading] = useState(true);
  const [listOpen, setListOpen] = useState(false);

  useEffect(() => {
    if (currentUser) {
      fetchFavorites();
    }
  }, [currentUser]);

  const fetchFavorites = async () => {
    setLoading(true);
    try {
      const q = query(collection(db, 'users', currentUser!.uid, 'favorites'));
      const querySnapshot = await getDocs(q);
      const favoritePlaylists: Playlist[] = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        favoritePlaylists.push({ id: doc.id, ...data } as Playlist);
      });
      setFavorites(favoritePlaylists);
    } catch (error) {
      console.error('Error fetching favorite playlists: ', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (playlistId: string) => {
    try {
      await deleteDoc(doc(db, 'users', currentUser!.uid, 'favorites', playlistId));
      setFavorites(favorites.filter((playlist) => playlist.id !== playlistId));
    } catch (error) {
      console.error('Error deleting favorite playlist: ', error);
    }
  };

  const toggleFavoriteList = () => {
    setListOpen((prev) => !prev);
    console.log(listOpen);
  };

  if (loading) {
    return <div><Loader/></div>;
  }


  return (
    <div className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.titleWrapper}>
          <h3 className={styles.title}>Favorite Playlists </h3>
          <div className={styles.tooltipS} onClick={toggleFavoriteList}>
            {listOpen ? <TfiClose className={styles.icon}/> : <PiListHeartDuotone className={styles.icon}/>}
            <span className={styles.tooltipTextS}>{listOpen ? `hide favorites playlists` : `show favorites playlists`}</span>
          </div>
        </div>
        {listOpen ? <div>
        {favorites.length === 0 ? (
        <p className={styles.text}>You have no favorite playlists.</p>
        ) : (
          <ul className={styles.list}>
          {favorites.map((playlist) => (
            <li key={playlist.id} className={styles.item}>
              <div className={styles.card}> 
                <Link href={`/playlist?imgUrl=${encodeURIComponent(playlist.url)}}&playlistId=${encodeURIComponent(playlist.playlistId)}`}  className={styles.link}>
                  <p></p>
                  <Image src={playlist.url} alt={playlist.url} width={260} height={200} className={styles.img} priority/>
                </Link>
                <button type='button' onClick={() => handleDelete(playlist.id)} className={styles.btn}>
                    <div className={styles.tooltip}>
                      <MdDelete />
                      <span className={styles.tooltiptext}>Remove from Favorites</span>
                    </div>
                </button>
              </div>
            </li>
          ))}
          </ul>
        )}
        </div> : ''}
        
      </div>
    </div>
  );
};

export default FavoritesPlaylists;
