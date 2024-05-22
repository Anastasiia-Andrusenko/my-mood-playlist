
// Header.tsx
// 

import React, { useEffect, useState } from "react";

import styles from './Header.module.scss';
import Link from "next/link";
import { toast } from 'react-toastify';
import { handleLogout } from '../../services/authService';
import { useRouter } from "next/router";
import Modal from "../Modal/Modal";

interface HeaderProps {
  nickname: string | null;
}

const Header: React.FC<HeaderProps> = ({ nickname }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isModalOpen]);

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

  return (
    <header className={styles.header}>
      <div className={styles.container}>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onConfirm={handleConfirmLogout}
      />
        {nickname ? (
          <div className={styles.content}>
            <p className={styles.welcome}>How are you, {nickname} ?</p>
            <div className={styles.nav}>
              <Link href={`/`} className={styles.link} passHref> go home</Link>
              <p onClick={handleOpenModal} className={styles.link}>log out</p>
            </div>
          </div>
        ) : (
          <p>Not logged in</p>
        )}
      </div>
    </header>
  );
};

export default Header;
