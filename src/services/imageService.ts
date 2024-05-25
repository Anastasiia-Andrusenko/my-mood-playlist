// services/imageService.ts

import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../utils/firebaseConfig';

export const fetchImages = async () => {
  try {

    // Запит із сортуванням за полем "order"
    const q = query(collection(db, 'images'), orderBy('order', 'asc'));
    const querySnapshot = await getDocs(q);

    return querySnapshot.docs.map(doc => ({
      url: doc.data().url as string,
      description: doc.data().description as string, 
      playlistId: doc.data().playlistId as string,
      order: doc.data().order as number// Припускаємо, що у документі є поле description
    }));
  } catch (error: any) {
    console.error("Error fetching images: ", error.message);
    throw error;
  }
};
