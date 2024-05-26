
// Home.tsx
// 

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import styles from './Home.module.scss';
import getConfig from 'next/config';
import { auth } from '../../utils/firebaseConfig';
import { signOut } from 'firebase/auth';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { handleLogout } from '../../services/authService';
import useAuthState from '../../hooks/useAuthState';
import SlideShow from '../../components/SlideShow/SlideShow';
import Footer from '../../components/Footer/Footer';
import { animateScroll as scroll, scroller } from 'react-scroll';
import Modal from '../../components/Modal/Modal';
import { TbLogout } from "react-icons/tb";
import MoodGallery from '../../components/MoodGallery/MoodGallery';

const { publicRuntimeConfig } = getConfig();
const basePath = publicRuntimeConfig.basePath || '';

const Home: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSlideShowVisible, setIsSlideShowVisible] = useState(true);

  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsLoggedIn(!!user);
    });

    return () => unsubscribe();
  }, [router]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSlideShowVisible(false);
    }, 7000); // 7 seconds

    return () => clearTimeout(timer);
  }, []);

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
    <div className={styles.container}>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onConfirm={handleConfirmLogout}
      />
      <div
        className={`${styles.slideShowContainer} ${isSlideShowVisible ? styles.show : styles.hide}`}
      >
        <SlideShow text='listen to your heart'/>
      </div>
      <p className={styles.text} id='text-section'>Your life is like the best fucking movie! <br/>
        The background changes, characters appear. 
        Yesterday you were crying, and now you are laughing. 
        What can add spice to this moment? Yes. <br/>
        A perfectly fitting soundtrack
      </p>
      <div className={styles.hookContainer}>
        <div className={styles.hook}>
          <div className={styles.hookImg}><MoodGallery/></div>
          {isLoggedIn ? <p className={styles.hookText}>
          These images evoke different feelings and moods. Accordingly, they all sound different. You are already logged in, so don&apos;t forget to visit your <Link href={`/account`} className={styles.textlink}>personal account</Link>
          </p> : <p className={styles.hookText}>These images evoke different feelings and moods. Accordingly, they all sound different. 
            To enjoy the music, you need to log in. It&apos;s very easy to do it <Link href={`/login`} className={styles.textlink}>here</Link>. And if you 
            don&apos;t have an account yet, go <Link href={`/register`} className={styles.textlink} >here</Link>. And don&apos;t forget to visit your <Link href={`/account`} className={styles.textlink}>personal account</Link> there are more features. <br/>Enjoy your listening.
           </p>}
          
        </div>
      </div>
      <h2 className={styles.comeOn}><Link href={`/images`} passHref className={styles.link}>Come on<br/>Let&apos;s choose a playlist</Link></h2>
      <h1 className={styles.title}>
        <Link href={`/images`} passHref className={styles.link}>listen to music that perfectly matches your mood</Link>
      </h1>
      {isLoggedIn ? (
        <div className={styles.loggedIn}>
          <p className={styles.already}>You are now logged in and can use all the features of this application. However, if you want, you can log out at any time</p>
          <button onClick={handleOpenModal} className={styles.button}>now<TbLogout className={styles.icon}/></button>
        </div>
      ) : ( <>
      <p className={styles.please}>Please log in to access all features.</p>
      <nav className={styles.nav}>
          <ul>
            <li>
              <Link href={`/login`} passHref>
                Login
              </Link>
            </li>
            <li>
              <Link href={`/register`} passHref>
                Register
              </Link>
            </li>
          </ul>
        </nav>
      </>
      )}
      <Footer/>
    </div>
  );
};

export default Home;

