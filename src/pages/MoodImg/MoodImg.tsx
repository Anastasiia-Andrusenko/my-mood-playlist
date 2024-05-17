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



const Images: React.FC = () => {
  const [images, setImages] = useState<{ url: string; description: string }[]>([]);
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
    return null; // Або завантажувальний індикатор
  }

  return (
    <div>
      <Header nickname={nickname} />
      <main>
        <h1>Choose an Image</h1>
        <Suspense fallback={<Loader/>}>
          <ImagesContent  imgContent={images}/>
        </Suspense>
      </main>
    </div>
  );
};

export default Images;
