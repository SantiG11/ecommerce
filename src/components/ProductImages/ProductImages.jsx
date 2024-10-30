import { BigProductImage } from "../BigProductImage/BigProductImage";
import { ProductImagesCarousel } from "../ProductImagesCarousel/ProductImagesCarousel";
import "./ProductImages.css";

export function ProductImages() {
  return (
    <div className="product-images-container">
      <BigProductImage />
      <ProductImagesCarousel />
    </div>
  );
}
