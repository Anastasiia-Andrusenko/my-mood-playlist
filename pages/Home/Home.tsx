
// Home.tsx
// 

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import styles from './Home.module.scss';
import getConfig from 'next/config';
import { auth } from '../../utils/firebaseConfig';
import { useRouter } from 'next/router';
import SlideShow from '../../components/SlideShow/SlideShow';
import Footer from '../../components/Footer/Footer';
import MoodGallery from '../../components/MoodGallery/MoodGallery';
import Header from '../../components/Header/Header';
import { useAuth } from '../../context/AuthContext';
import HeaderWrapper from '../../components/Header/HeaderWrapper';

const { publicRuntimeConfig } = getConfig();
const basePath = publicRuntimeConfig.basePath || '';

const Home: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSlideShowVisible, setIsSlideShowVisible] = useState(true);
  const { currentUser, updateDisplayName } = useAuth();
  const [displayName, setDisplayName] = useState(currentUser?.displayName || '');

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


  return (
    <div className={styles.container}> 
    <HeaderWrapper nickname={currentUser} page={'home'}/>
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
        ''
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

