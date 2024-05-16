import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { collection, getDocs } from 'firebase/firestore';
import { db, auth } from '../utils/firebaseConfig';
import Header from '../components/Header';
import styles from '../styles/Images.module.scss';

const Images: React.FC = () => {
  const [nickname, setNickname] = useState<string | null>(null);
  const [images, setImages] = useState<string[]>([]);
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
      const urls = querySnapshot.docs.map(doc => doc.data().url as string);
      setImages(urls);
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
          {images.map((url, index) => (
            <img key={index} src={url} alt={`Image ${index + 1}`} className={styles.img}/>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Images;


