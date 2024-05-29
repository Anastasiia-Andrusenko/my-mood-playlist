
// Header.tsx
// 

import React, { useEffect, useState } from "react";

import styles from './Header.module.scss';
import Link from "next/link";
import { toast } from 'react-toastify';
import { handleLogout } from '../../services/authService';
import { useRouter } from "next/router";
import Modal from "../Modal/Modal";
import { GrHome } from "react-icons/gr";
import { TbLogout } from "react-icons/tb";
import { MdOutlineLibraryMusic } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { useAuth } from "../../context/AuthContext";

interface HeaderProps {
  nickname: string | null;
  page: string | null;
}

const Header: React.FC<HeaderProps> = ({ page }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();
  const currentPage = page;
  const { currentUser } = useAuth();

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
        {currentUser ? (
          <div className={styles.content}>
            <div className={styles.nav}>
            {currentPage === 'home' && (
                <Link href={`/images`} passHref>
                  <div className={styles.link}>
                    <div className={styles.tooltip}>
                      <MdOutlineLibraryMusic />
                      <span className={styles.tooltiptext}>to mood list</span>
                    </div>
                  </div>
                </Link>
              )}
              {currentPage === 'images' && (
                <>
                <Link href={`/`} passHref>
                    <div className={styles.link}>
                      <div className={styles.tooltip}>
                        <GrHome />
                        <span className={styles.tooltiptext}>go Home page</span>
                      </div>
                    </div>
                  </Link>
                  <div onClick={handleOpenModal} className={styles.link}>
                    <div className={styles.tooltip}>
                      <TbLogout />
                      <span className={styles.tooltiptext}>Log Out</span>
                    </div>
                  </div>
                </>
              )}
              {currentPage === 'playlist' && (
                <><Link href={`/images`} passHref>
                  <div className={styles.link}>
                    <div className={styles.tooltip}>
                      <MdOutlineLibraryMusic />
                      <span className={styles.tooltiptext}>to mood list</span>
                    </div>
                  </div>
                </Link>
                <Link href={`/`} passHref>
                    <div className={styles.link}>
                      <div className={styles.tooltip}>
                        <GrHome />
                        <span className={styles.tooltiptext}>go Home page</span>
                      </div>
                    </div>
                  </Link>
                </>
              )}
              {currentPage === 'account' && <>
              <Link href={`/images`} passHref>
                  <div className={styles.link}>
                    <div className={styles.tooltip}>
                      <MdOutlineLibraryMusic />
                      <span className={styles.tooltiptext}>to mood list</span>
                    </div>
                  </div>
                </Link>
                <Link href={`/`} passHref>
                    <div className={styles.link}>
                      <div className={styles.tooltip}>
                        <GrHome />
                        <span className={styles.tooltiptext}>go Home page</span>
                      </div>
                    </div>
                  </Link>
                  <div onClick={handleOpenModal} className={styles.link}>
                    <div className={styles.tooltip}>
                      <TbLogout />
                      <span className={styles.tooltiptext}>Log Out</span>
                    </div>
                  </div>
              </>
              }
            </div>
            <div className={styles.welcome}>
              <Link href={`/account`} passHref>
                <div className={styles.nickname}>
                  <div className={styles.tooltip}>
                    &nbsp;{currentUser?.displayName || 'User'}&nbsp;&nbsp;
                    <FaUserAlt />
                    <span className={styles.tooltipText}>to personal account</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        ) : (
          <div className={styles.notLogin}>
            <Link href={`/`} passHref>
              <div className={styles.link}>
                <div className={styles.tooltip}>
                  <GrHome />
                  <span className={styles.tooltiptext}>go Home page</span>
                </div>
              </div>
            </Link>
            <p>Not logged in</p>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
