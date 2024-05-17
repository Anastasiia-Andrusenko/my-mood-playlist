import { fetchImages } from "../../services/imageService";
import Image from 'next/image';
import styles from './ImageContent.module.scss';
import { useQuery } from 'react-query';
import { FC, useState } from "react";


const fetchImagesQuery = async () => {
  return await fetchImages();
};


type ImageData = {
  url: string;
  description: string;
};

type ImagesContentProps = {
  imgContent: ImageData[];
};


const ImagesContent: FC <ImagesContentProps> = ({ imgContent })=> {

  const { data: images } = useQuery ('images', fetchImagesQuery);

  return (
    <div className={styles.imageGrid}>
      {imgContent.map((image, index) => (
        <div key={index} className={styles.imgWrapper}>
          <Image width={500} height={350} src={image.url} alt={`Image ${index + 1}`} className={styles.img} priority={true} />
          <div className={styles.overlay}>
            {image.description}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImagesContent;