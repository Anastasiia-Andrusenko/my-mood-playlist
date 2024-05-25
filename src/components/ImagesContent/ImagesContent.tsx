
// 
// ImagesContent

import { fetchImages } from "../../services/imageService";
import Image from 'next/image';
import styles from './ImageContent.module.scss';
import { useQuery } from 'react-query';
import { FC, useState } from "react";
import Link from "next/link";
import { GiClick } from "react-icons/gi";


const fetchImagesQuery = async () => {
  return await fetchImages();
};


type ImageData = {
  url: string;
  description: string;
  playlistId: string;
};

type ImagesContentProps = {
  imgContent: ImageData[];
};


const ImagesContent: FC <ImagesContentProps> = ({ imgContent })=> {

  return (
    <div className={styles.imageGrid}>
      {imgContent.map((image, index) => (
        <div key={index} className={styles.imgWrapper}>
          <GiClick  className={styles.icon}/>
          <Image width={500} height={350} src={image.url} alt={`Image ${index + 1}`} className={styles.img} priority={true} />
          <div className={styles.overlay}>
            <Link href={`/playlist?imgUrl=${encodeURIComponent(image.url)}&description=${encodeURIComponent(image.description)}&playlistId=${encodeURIComponent(image.playlistId)}`} 
              className={styles.link} 
              passHref 
            >
              <p className={styles.description}> {image.description}</p>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImagesContent;