import { AddToCartButton } from "../AddToCartButton/AddToCartButton";
import { AmountButton } from "../AmountButton/AmountButton";
import "./DetailsContainerStyle.css";

export function DetailsContainer({ item }) {
  return (
    <div className="details-container">
      <h3 className="company-name">{item.brand}</h3>

      <h1 className="product-name">{item.name}</h1>

      <p className="product-description">{item.description}</p>

      <div className="price-container">
        <p className="price">{item.price}</p>
        <div className="discount">{item.discount}</div>
      </div>

      <p className="last-price">{item.realPrice}</p>

      <div className="cart-buttons-container">
        <AmountButton item={item} />
        <AddToCartButton product={item} />
      </div>
    </div>
  );
}
