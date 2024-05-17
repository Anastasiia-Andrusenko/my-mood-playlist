// 
// SlideShow.tsx
// 

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import styles from './SlideAhow.module.scss';

const images = [
  '/img/bg/01.jpg',
  '/img/bg/02.jpg',
  '/img/bg/03.jpg',
  '/img/bg/04.jpg',
  '/img/bg/05.jpg',
  '/img/bg/06.jpg',
  '/img/bg/07.jpg',
  '/img/bg/08.jpg',
  '/img/bg/09.jpg',
  '/img/bg/010.jpg',
  '/img/bg/012.jpg',
  '/img/bg/013.jpg',
  '/img/bg/014.jpg',
  '/img/bg/015.jpg',
  '/img/bg/016.jpg',
  '/img/bg/017.jpg',
  '/img/bg/018.jpg',
  '/img/bg/019.jpg',
  '/img/bg/020.jpg',
  '/img/bg/021.jpg',
  '/img/bg/022.jpg',
];


const SlideShow = ({text}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 800); // Змінювати зображення кожні 0.8 секунд

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

