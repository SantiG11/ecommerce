import { AddToCartButton } from "../AddToCartButton/AddToCartButton";
import { AmountButton } from "../AmountButton/AmountButton";
import "./DetailsContainerStyle.css";

export function DetailsContainer({ item }) {
  return (
    <div className="details-container">
      <h3 className="company-name">{item.brand}</h3>

      <h2 className="product-name">{item.name}</h2>

      <p className="product-description">{item.description}</p>

      <div className="price-container">
        <p className="price">${item.price.toFixed(2)}</p>
        {item.discount && <div className="discount">{item.discount}%</div>}
        {item.discount && (
          <p className="last-price">${item.realPrice.toFixed(2)}</p>
        )}
      </div>

      <div className="cart-buttons-container">
        <AmountButton item={item} />
        <AddToCartButton product={item} />
      </div>
    </div>
  );
}
