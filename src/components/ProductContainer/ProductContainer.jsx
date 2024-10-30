import { DetailsContainer } from "../DetailsContainer/DetailsContainer";
import { ProductImages } from "../ProductImages/ProductImages";
import "./ProductContainerStyle.css";

export function ProductContainer() {
  return (
    <div className="product-container">
      <ProductImages />
      <DetailsContainer />
    </div>
  );
}
