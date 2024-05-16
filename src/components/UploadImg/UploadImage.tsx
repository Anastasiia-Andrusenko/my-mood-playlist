import { useState } from 'react';
import { storage, db } from '../../utils/firebaseConfig';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';
import styles from './UploadImage.module.scss';

const UploadImage = () => {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string>('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (file) {
      const storageRef = ref(storage, `images/${file.name}`);
      try {
        await uploadBytes(storageRef, file);
        const url = await getDownloadURL(storageRef);
        await addDoc(collection(db, 'images'), { url });
        alert('Image uploaded successfully');
      } catch (error: any) {
        setError(error.message);
      }
    } else {
      setError('Please select a file');
    }
  };

  return (
    <div className={styles.container}>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} className={styles.button}>Upload Image</button>
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default UploadImage;