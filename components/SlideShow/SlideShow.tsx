// 
// SlideShow.tsx
// 

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import styles from './SlideAhow.module.scss';

const images = [
  '../../public/img/bg/01.jpg',
  '../../public/img/bg/02.jpg',
  '../../public/img/bg/03.jpg',
  '../../public/img/bg/04.jpg',
  '../../public/img/bg/05.jpg',
  '../../public/img/bg/06.jpg',
  '../../public/img/bg/07.jpg',
  '../../public/img/bg/08.jpg',
  '../../public/img/bg/09.jpg',
  '../../public/img/bg/010.jpg',
  '../../public/img/bg/012.jpg',
  '../../public/img/bg/013.jpg',
  '../../public/img/bg/014.jpg',
  '../../public/img/bg/015.jpg',
  '../../public/img/bg/016.jpg',
  '../../public/img/bg/017.jpg',
  '../../public/img/bg/018.jpg',
  '../../public/img/bg/019.jpg',
  '../../public/img/bg/020.jpg',
  '../../public/img/bg/021.jpg',
  '../../public/img/bg/022.jpg',
];


const SlideShow = ({text}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 300); // Змінювати зображення кожні 0.5 секунд

    return () => clearInterval(interval);
  }, []);

   // Розділення тексту на слова
   const words = text.split(' ');

  return (
    <div className={styles.slideshow}>
      <div className={styles.overlay}></div>
      {images.map((image, index) => (
        <Image
          width={500}
          height={500}
          key={index}
          src={image}
          className={`${styles.slide} ${index === currentImageIndex ? styles.active : ''}`}
          alt={`picture ${index}`}
          priority
        />
      ))}
      <div className={styles.content}>
        <h2>{words.map((word, index) => (
            <span
              key={index}
              className={`${styles.word} ${word === 'heart' ? styles.heart : ''}`}
              style={{ animationDelay: `${index * 0.5}s` }} // Затримка анімації для кожного слова
            >
              {word}
            </span>
          ))}</h2>
      </div>
    </div>
  );

};


export default SlideShow;

