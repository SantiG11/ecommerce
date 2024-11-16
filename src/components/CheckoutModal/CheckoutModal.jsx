import { useContext, useEffect, useState } from "react";
import { EcommerceContext } from "../../context/EcommerceContext";
import { CartItem } from "../CartItem/CartItem";
import "./CheckoutModalStyle.css";
import { CloseButton } from "../CloseButton/CloseButton";
import { OrangeButton } from "../CheckoutButton/OrangeButton";

export function CheckoutModal() {
  const {
    cartItems,
    setCartItems,
    showCheckout,
    setShowCheckout,
    setModalBackdrop,
  } = useContext(EcommerceContext);

  const [total, setTotal] = useState(0);

  const calculateTotal = (items) => {
    const newTotal = items.reduce(
      (sum, item) => sum + item.price * item.amount,
      0
    );
    setTotal(newTotal);
  };

  if (showCheckout) {
    setModalBackdrop(true);
  }

  const handlePurchase = () => {
    setShowCheckout(false);
    setModalBackdrop(false);
    setCartItems([]);
  };

  const closeCheckoutModal = () => {
    setShowCheckout(false);
    setModalBackdrop(false);
  };

  useEffect(() => {
    calculateTotal(cartItems);
  }, [cartItems]);

  return (
    <div className="checkout-modal">
      <h3>Checkout</h3>
      <div className="close-button">
        <CloseButton close={closeCheckoutModal} />
      </div>

      <div className="checkout-items-container">
        {cartItems.map((cartItem, index) => (
          <CartItem
            item={cartItem}
            key={cartItem.name + index}
            id={cartItem.name}
          />
        ))}
      </div>
      <p className="checkout-total">Total: ${total}</p>
      <OrangeButton text="Buy" action={handlePurchase} />
    </div>
  );
}
