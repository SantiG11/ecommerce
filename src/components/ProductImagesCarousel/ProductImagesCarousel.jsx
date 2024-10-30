import "./ProductImageCarouselStyle.css";

export function ProductImagesCarousel() {
  return (
    <div className="carousel">
      <img
        src="src\mocks\images\image-product-1.jpg"
        alt="product-image"
        className="product-image"
      />
      <img
        src="src\mocks\images\image-product-2.jpg"
        alt="product-image"
        className="product-image"
      />
      <img
        src="src\mocks\images\image-product-3.jpg"
        alt="product-image"
        className="product-image"
      />
      <img
        src="src\mocks\images\image-product-4.jpg"
        alt="product-image"
        className="product-image"
      />
    </div>
  );
}
