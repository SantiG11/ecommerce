import { useState } from "react";
import { BigProductImage } from "../BigProductImage/BigProductImage";
import { ProductImagesCarousel } from "../ProductImagesCarousel/ProductImagesCarousel";
import "./ProductImages.css";

export function ProductImages({ images }) {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const selectImage = (index) => {
    setSelectedImage(images[index]);
  };

  return (
    <div className="product-images-container">
      <BigProductImage bigImage={selectedImage} />
      <ProductImagesCarousel
        smallImages={images}
        method={selectImage}
        selectedImage={selectedImage}
      />
    </div>
  );
}
