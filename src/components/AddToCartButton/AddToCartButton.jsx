import "./AddToCartButtonStyle.css";

export function AddToCartButton() {
  return (
    <div className="add-to-cart-btn">
      <img
        src="src/assets/icon-cart-black.svg"
        alt="cart-icon"
        className="cart-icon"
      />

      <p className="add-to-cart">Add to cart</p>
    </div>
  );
}
