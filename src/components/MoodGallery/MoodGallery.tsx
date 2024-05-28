// 
// components/MoodGallery/MoodGallery.tsx

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import styles from './MoodGallery.module.scss';
import { fetchImages } from '../../services/imageService';

const MoodGallery: React.FC = () => {
  const [images, setImages] = useState<{ url: string; description: string; playlistId: string }[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getImages = async () => {
      try {
        const fetchedImages = await fetchImages();
        setImages(fetchedImages);
        console.log(images);
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.error("Error fetching images: ", error.message);
        }
      } finally {
        setLoading(false); // Завершуємо завантаження в будь-якому випадку
      }
    };

    getImages();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1500); // Змінювати зображення кожні 3 секунди

    return () => clearInterval(interval);
  }, [images]);

  if (loading) return <p>Loading...</p>;
  if (images.length === 0) return <p>No images found.</p>;

  return (
    <div className={styles.gallery}>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.url}
          width={400}
          height={300}
          className={`${styles.image} ${index === currentImageIndex ? styles.active : ''}`}
          alt={image.description || `Gallery image ${index}`}
          priority
        />
      ))}
    </div>
  );
};

export default MoodGallery;
