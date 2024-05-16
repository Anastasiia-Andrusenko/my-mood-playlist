import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db, auth } from '../utils/firebaseConfig';
import styles from '../styles/Images.module.scss';

const Images = () => {
  const [nickname, setNickname] = useState<string | null>(null);
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      setNickname(user.displayName);
    }

    const fetchImages = async () => {
      const querySnapshot = await getDocs(collection(db, 'images'));
      const urls = querySnapshot.docs.map(doc => doc.data().url);
      setImages(urls);
    };

    fetchImages();
  }, []);

  return (
    <div>
      <header>
        {nickname ? (
          <p>Welcome, {nickname}!</p>
        ) : (
          <p>Not logged in</p>
        )}
      </header>
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

