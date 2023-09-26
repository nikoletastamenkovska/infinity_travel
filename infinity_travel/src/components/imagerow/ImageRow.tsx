import React from "react";
import { YourMomentsType } from "src/types/data_interface";
import styles from "./ImageRow.module.css";
import UseScreenSize from "src/hooks/UseScreenSize";
interface Props {
  images: YourMomentsType[];
  openModal: (index: number) => void;
}
const NUMBER_OF_IMAGES_XS = 2;
const NUMBER_OF_IMAGES_S = 3;
const NUMBER_OF_IMAGES_M = 4;
const NUMBER_OF_IMAGES_L = 5;
const NUMBER_OF_IMAGES_XL = 6;
const NUMBER_OF_IMAGES_XXL = 7;

export const ImageRow: React.FC<Props> = ({ images, openModal }) => {
  const screenWidth: number = UseScreenSize();
  let chunkSize: number;

  if (screenWidth <= 555) {
    chunkSize = NUMBER_OF_IMAGES_XS;
  } else if (screenWidth > 555 && screenWidth <= 768) {
    chunkSize = NUMBER_OF_IMAGES_S;
  } else if (screenWidth > 768 && screenWidth <= 1023) {
    chunkSize = NUMBER_OF_IMAGES_M;
  } else if (screenWidth > 1023 && screenWidth <= 1077) {
    chunkSize = NUMBER_OF_IMAGES_L;
  } else if (screenWidth >= 1078 && screenWidth <= 1252) {
    chunkSize = NUMBER_OF_IMAGES_XL;
  } else {
    chunkSize = NUMBER_OF_IMAGES_XXL;
  }

  const chunkedImages: YourMomentsType[][] = [];

  for (let i = 0; i < images.length; i += chunkSize) {
    chunkedImages.push(images.slice(i, i + chunkSize));
  }

  return (
    <div className={styles.imageRowContainer}>
      {chunkedImages.map((imageChunk, rowIndex) => {
        return (
          <div className="styles.images_row" key={rowIndex}>
            {imageChunk.map((image, index) => {
              return (
                <img
                  key={index}
                  src={image.Url}
                  alt={image.Region}
                  className={styles.image}
                  onClick={() => openModal(index + rowIndex + chunkSize)}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
