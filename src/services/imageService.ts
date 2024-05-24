// services/imageService.ts

import { collection, getDocs } from 'firebase/firestore';
import { db } from '../utils/firebaseConfig';

export const fetchImages = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'images'));
    return querySnapshot.docs.map(doc => ({
      url: doc.data().url as string,
      description: doc.data().description as string, 
      playlistId: doc.data().playlistId as string,// Припускаємо, що у документі є поле description
    }));
  } catch (error: any) {
    console.error("Error fetching images: ", error.message);
    throw error;
  }
};
