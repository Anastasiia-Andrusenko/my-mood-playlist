import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { collection, getDocs } from 'firebase/firestore';
import { db, auth } from '../utils/firebaseConfig';
import Header from '../components/Header';
import styles from '../styles/Images.module.scss';

const Images: React.FC = () => {
  const [nickname, setNickname] = useState<string | null>(null);
  const [images, setImages] = useState<{url: string, description: string}[]>([]);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setNickname(user.displayName);
        fetchImages();
      } else {
        router.push('/login');
      }
    });

    return () => unsubscribe();
  }, []);

  const fetchImages = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'images'));
      const imagesData = querySnapshot.docs.map(doc => ({
        url: doc.data().url as string,
        description: doc.data().description as string, // Припускаємо, що у документі є поле description
      }));
      setImages(imagesData);
    } catch (error: any) {
      console.error("Error fetching images: ", error.message);
    }
  };

  return (
    <div>
      <Header nickname={nickname} />
      <main>
        <h1>Choose an Image</h1>
        <div className={styles.imageGrid}>
          {images.map((image, index) => (
            <div key={index} className={styles.imgWrapper}>
              <img src={image.url} alt={`Image ${index + 1}`} className={styles.img} />
              <div className={styles.overlay}>
                {image.description}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Images;



