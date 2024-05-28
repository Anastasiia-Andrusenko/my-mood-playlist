// 
// PersonalAcc.tsx 
// 
import styles from './PersonalAcc.module.scss';
import React, { Suspense, useEffect, useState } from "react";
import { useRouter } from 'next/router';
import useAuthStateWithRedirect from '../../hooks/useAuthStateWithRedirect';
import { useAuth } from '../../context/AuthContext';
import Loader from '../../components/Loader/Loader';
import { TbLogout } from 'react-icons/tb';
import Modal from '../../components/Modal/Modal';
import { handleLogout } from '../../services/authService';
import { toast } from 'react-toastify';
import FavoritesPlaylistsWrapper from '../../components/FavoritesPlaylists/FavoritesPlaylistsWrapper';
import ProfileEditWrapper from '../../components/ProfileEdit/ProfileEditWrapper';
import FooterWrapper from '../../components/Footer/FooterWrapper';
import HeaderWrapper from '../../components/Header/HeaderWrapper';

interface Playlist {
  id: string;
  title: string;
}

const PersonalAcc = () => {
  const { currentUser } = useAuth();
  const [favorites, setFavorites] = useState<Playlist[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();
  const nickname = useAuthStateWithRedirect();
  
  useEffect(() => {
    if (currentUser) {
      setLoading(false);
    } else {
      router.push('/login'); // Redirect to login if not authenticated
    }
  }, [currentUser, router]);

  if (loading) {
    return <Loader />;
  }

  const logout = async () => {
    // Реалізація функції onLogout
    try {
      const result = await handleLogout();
      if (result.success) {
      toast.warning('You logged out');
      router.push('/');
    } else {
      toast.error('Logout failed');
      }
    } catch (error) {
      toast.error('An error occurred during logout');
    }
    console.log('User logged out');
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleConfirmLogout = () => {
    setIsModalOpen(false);
    logout();
  };

return <>
<Suspense fallback={<Loader/>}>
<HeaderWrapper nickname={nickname} page={'account'}/>
  <main className={styles.main}>
    <Modal
      isOpen={isModalOpen}
      onClose={handleCloseModal}
      onConfirm={handleConfirmLogout}
    />
    <div className={styles.container}>
      <h2 className={styles.title}> How are you, {currentUser?.displayName || 'User'}?</h2>
      <ProfileEditWrapper/>
      <FavoritesPlaylistsWrapper />
    </div>
    <div className={styles.loggedIn}>
      <p className={styles.already}>You are now logged in and can use all the features of this application. However, if you want, you can log out at any time</p>
      <button onClick={handleOpenModal} className={styles.button}>now<TbLogout className={styles.icon}/></button>
    </div>
  </main>
  <FooterWrapper/>
</Suspense>
</>
};

export default PersonalAcc;