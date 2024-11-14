import { useContext, useEffect, useState } from "react";
import { BigProductImage } from "../BigProductImage/BigProductImage";
import { ProductImagesCarousel } from "../ProductImagesCarousel/ProductImagesCarousel";
import "./ProductImages.css";
import { useImage } from "../../logic/useImage";
import { ImagesModal } from "../ImagesModal/ImagesModal";
import { EcommerceContext } from "../../context/EcommerceContext";

export function ProductImages({ images }) {
  const { selectedImage, selectImage, handleNextImage, handlePrevImage } =
    useImage(images);

  const { setModalBackdrop } = useContext(EcommerceContext);

  const [imageModal, setImageModal] = useState(false);

  const openImageModal = () => {
    if (window.innerWidth < 800) return;
    setImageModal(true);
    setModalBackdrop(true);
    console.log(imageModal);
  };

  const closeImageModal = () => {
    setImageModal(false);
    setModalBackdrop(false);
    console.log(imageModal);
  };

  if (window.innerWidth < 800 && imageModal) {
    closeImageModal();
  }

  window.addEventListener("resize", () => {
    if (window.innerWidth > 800 && imageModal) {
      setModalBackdrop(true);
    }
  });

  useEffect(() => {
    console.log(imageModal);
  }, [imageModal]);

  return (
    <div className={`product-images-container`}>
      <BigProductImage
        bigImage={selectedImage}
        nextImage={handleNextImage}
        prevImage={handlePrevImage}
        toggleModal={openImageModal}
      />
      <ProductImagesCarousel
        smallImages={images}
        method={selectImage}
        selectedImage={selectedImage}
      />
      {imageModal && (
        <ImagesModal images={images} toggleModal={closeImageModal} />
      )}
    </div>
  );
}
