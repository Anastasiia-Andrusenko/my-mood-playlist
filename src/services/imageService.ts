// services/imageService.ts
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../utils/firebaseConfig';

export const fetchImages = async () => {
  try {
    const q = query(collection(db, 'images'), orderBy('order', 'asc'));
    const querySnapshot = await getDocs(q);

    const images = querySnapshot.docs.map(doc => ({
      url: doc.data().url as string,
      description: doc.data().description as string,
      playlistId: doc.data().playlistId as string,
      order: doc.data().order as number,
    }));

    if (images.length === 0) {
      console.warn("No images found in the database");
    } else {
      console.log("Fetched images: ", images);
    }

    return images;
  } catch (error: any) {
    console.error("Error fetching images: ", error.message);
    throw error;
  }
};
