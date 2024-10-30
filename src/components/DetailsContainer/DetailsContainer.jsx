import { AddToCartButton } from "../AddToCartButton/AddToCartButton";
import { AmountButton } from "../AmountButton/AmountButton";
import "./DetailsContainerStyle.css";

export function DetailsContainer() {
  return (
    <div className="details-container">
      <h3 className="company-name">SNEAKER COMPANY</h3>

      <h1 className="product-name">Fall Limited Edition Sneakers</h1>

      <p className="product-description">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>

      <div className="price-container">
        <p className="price">$125.00</p>
        <div className="discount">50%</div>
      </div>

      <p className="last-price">$250.00</p>

      <div className="cart-buttons-container">
        <AmountButton />
        <AddToCartButton />
      </div>
    </div>
  );
}
