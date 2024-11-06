import { useState } from "react";
import { Cart } from "../Cart/Cart";
import "./CartButtonStyle.css";

export function CartButton() {
  const [openCart, setOpenCart] = useState(false);

  const handleClick = () => {
    setOpenCart(!openCart);
  };

  return (
    <div className="cart-button">
      <img
        src="src/assets/icon-cart.svg"
        alt="cart-icon"
        onClick={handleClick}
      />
      <div className={openCart ? "" : "hidden"}>
        <Cart />
      </div>
    </div>
  );
}
