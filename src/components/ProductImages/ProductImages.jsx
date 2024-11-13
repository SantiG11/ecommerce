import { useState } from "react";
import { BigProductImage } from "../BigProductImage/BigProductImage";
import { ProductImagesCarousel } from "../ProductImagesCarousel/ProductImagesCarousel";
import "./ProductImages.css";

export function ProductImages({ images }) {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const selectImage = (index) => {
    setSelectedImage(images[index]);
  };

  const handleNextImage = () => {
    const i = images.indexOf(selectedImage);
    console.log(i);
    if (i < images.length - 1) {
      setSelectedImage(images[i + 1]);
    }
  };

  const handlePrevImage = () => {
    const i = images.indexOf(selectedImage);
    console.log(i);
    if (i > 0) {
      setSelectedImage(images[i - 1]);
    }
  };

  return (
    <div className="product-images-container">
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
