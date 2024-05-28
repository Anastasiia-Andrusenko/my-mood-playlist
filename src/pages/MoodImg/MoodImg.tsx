// 
// MoodImg.tsx
// 
import { Suspense, useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import styles from './Images.module.scss';
import { fetchImages } from '../../services/imageService';
import useAuthStateWithRedirect from '../../hooks/useAuthStateWithRedirect';
import { useRouter } from 'next/router';
import Loader from '../../components/Loader/Loader';
import ImagesContent from '../../components/ImagesContent/ImagesContent';
import Footer from '../../components/Footer/Footer';
import UploadImage from '../../components/UploadImg/UploadImage';
import FavoritesPlaylists from '../../components/FavoritesPlaylists/FavoritesPlaylists';



const Images: React.FC = () => {
  const [images, setImages] = useState<{ url: string; description: string; playlistId: string }[]>([]);
  const [loading, setLoading] = useState(true); // Додаємо стан завантаження
  const nickname = useAuthStateWithRedirect();
  const router = useRouter();

  useEffect(() => {
    const loadImages = async () => {
      try {
        const imagesData = await fetchImages();
        setImages(imagesData);
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.error("Error fetching images: ", error.message);
        }
      } finally {
        setLoading(false); // Завершуємо завантаження в будь-якому випадку
      }
    };

    if (nickname) {
      loadImages();
    }
  }, [nickname]);

  if (!nickname) {
    return <Loader/>  ; // Або завантажувальний індикатор
  }

  return (
    <div>
      <Header nickname={nickname} page={''}/>
      <main className={styles.container}>
        <p className={styles.text}>
          Sometimes no words can describe what you feel. 
          Therefore, you have different atmospheric images 
          in front of you. <br/>Click on the one that suits you best.
        </p>
        <h2 className={styles.title}>Choose with your heart</h2>
        <Suspense fallback={<Loader/>}>
          <ImagesContent  imgContent={images}/>
        </Suspense>
      </main>
      {/* <UploadImage/> */}
      <Footer/>
    </div>
  );
};

export default Images;
