import React, { useState } from "react";
import Modal from "react-modal";
import { Carousel } from "react-responsive-carousel";
import { YourMomentsType } from "src/types/data_interface";
import { ImageRow } from "../imagerow/ImageRow";
import { SectionTitle } from "../sectiontitle/SectionTitle";
import styles from "./YourMoments.module.css";

interface Props {
  images: YourMomentsType[];
}

export const YourMoments: React.FC<Props> = ({ images }) => {
  const [onOpenModal, setOnOpenModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const openModal = (index: number) => {
    setSelectedImageIndex(index);
    setOnOpenModalOpen(true);
  };

  const closeModal = () => {
    setOnOpenModalOpen(false);
  };

  const customPrevArrow = (
    clickHandler: () => void,
    hasPrev: boolean,
    label: string
  ) => (
    <button
      className={styles.custom_prev}
      onClick={clickHandler}
      disabled={!hasPrev}
      aria-label={label}
    >
      <img src={"/icons_img/left_arrow.png"} alt="arrow showing left" />
    </button>
  );
  const customNextArrow = (
    clickHandler: () => void,
    hasNext: boolean,
    label: string
  ) => (
    <button
      className={styles.custom_next}
      onClick={clickHandler}
      disabled={!hasNext}
      aria-label={label}
    >
      <img src={"/icons_img/right_arrow.png"} alt="arrow showing right" />
    </button>
  );

  return (
    <>
      <SectionTitle title={"Ваши моменти"} />
      <div className="pb-5 d-flex justify-content-center">
        <ImageRow images={images} openModal={openModal} />
        <Modal
          isOpen={onOpenModal}
          onRequestClose={closeModal}
          contentLabel="Image Modal"
          style={{
            content: {
              maxWidth: "500px",
              maxHeight: "auto",
              margin: "0 auto",
              padding: "0",
              borderRadius: "8px",
              border: "none",
              backgroundColor: "transparent",
            },
            overlay: {
              backgroundColor: "rgba(247, 215, 188, 0.4)",
            },
          }}
        >
          <div className={`py-4 px-lg-5 ${styles.animator_div}`}>
            <div className="text-center">
              <img
                src={"/icons_img/close_icon.png"}
                alt="close icon"
                className={styles.close_icon}
                onClick={closeModal}
              />
            </div>
            <Carousel
              showThumbs={false}
              selectedItem={selectedImageIndex}
              className={styles.carousel_content}
              renderArrowPrev={customPrevArrow}
              renderArrowNext={customNextArrow}
            >
              {images.map((image, index) => {
                return (
                  <div key={index}>
                    <img
                      src={"/icons_img/location_background.png"}
                      alt="the undernead caption background"
                      className={styles.location_bg}
                    />
                    <h4 className={styles.location_caption}>
                      <img
                        src={"/images/group_travel/location_icon.png"}
                        alt="location icon"
                        className={styles.location_icon}
                      />
                      {image.Region}, {image.Country}
                    </h4>
                    <img src={image.Url} alt={`Image from ${image.Region}`} />
                  </div>
                );
              })}
            </Carousel>
          </div>
        </Modal>
      </div>
    </>
  );
};
