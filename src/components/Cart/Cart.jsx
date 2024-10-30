import "./CartStyle.css";

export function Cart() {
  return (
    <div className="cart">
      <div className="cart-header">
        <p>Cart</p>
      </div>
      <div className="cart-content">
        <p>Your cart is empty.</p>
      </div>
    </div>
  );
}
