import { useImage } from "../../logic/useImage";
import { BigProductImage } from "../BigProductImage/BigProductImage";
import { CloseButton } from "../CloseButton/CloseButton";
import { ProductImages } from "../ProductImages/ProductImages";
import { ProductImagesCarousel } from "../ProductImagesCarousel/ProductImagesCarousel";
import "./ImagesModalStyle.css";

export function ImagesModal({ images, toggleModal }) {
  const { selectedImage, selectImage, handleNextImage, handlePrevImage } =
    useImage(images);

  return (
    <div className={`product-images-container image-modal`}>
      <div className="close-modal-container">
        <CloseButton close={toggleModal} />
      </div>
      <BigProductImage
        bigImage={selectedImage}
        nextImage={handleNextImage}
        prevImage={handlePrevImage}
      />
      <ProductImagesCarousel
        smallImages={images}
        method={selectImage}
        selectedImage={selectedImage}
      />
    </div>
  );
}
