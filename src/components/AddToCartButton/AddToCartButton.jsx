import { useContext } from "react";
import "./AddToCartButtonStyle.css";
import { EcommerceContext } from "../../context/EcommerceContext";

export function AddToCartButton({ product }) {
  const { cartItems, setCartItems } = useContext(EcommerceContext);

  const handleAddToCart = (item) => {
    if (cartItems.some((product) => product.name === item.name)) {
      return alert("Product already added to the cart");
    }
    if (item.amount < 1) return alert("No amount added");
    const clonedItem = { ...item };
    const updatedItems =
      cartItems.length > 0 ? [...cartItems, clonedItem] : [clonedItem];
    setCartItems(updatedItems);

    item.removeAmount();
  };

  return (
    <div className="add-to-cart-btn" onClick={() => handleAddToCart(product)}>
      <img
        src="src/assets/icon-cart-black.svg"
        alt="cart-icon"
        className="cart-icon"
      />

      <p className="add-to-cart">Add to cart</p>
    </div>
  );
}
