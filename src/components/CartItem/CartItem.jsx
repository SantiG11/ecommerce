import "./CartItemStyle.css";
import deleteIcon from "/src/assets/icon-delete.svg";

export function CartItem({ item, id, handleDelete }) {
  const itemTotal = item.amount * item.price;

  return (
    <div className="cart-item" id={id}>
      <img
        src={`${item.thumbnail}`}
        alt="item-image"
        className="cart-item-img"
      />
      <div className="cart-item-details">
        <p className="cart-item-name">{item.name}</p>
        <div className="cart-item-price-container">
          <p className="cart-item-price">${item.price.toFixed(2)}</p>
          <p className="cart-item-amount">x{item.amount}</p>
          <p className="cart-item-total">${itemTotal.toFixed(2)}</p>
        </div>
      </div>
      {handleDelete && (
        <div className="delete-icon-container">
          <img
            src={deleteIcon}
            alt="delete-icon"
            className="delete-icon"
            onClick={handleDelete}
          />
        </div>
      )}
    </div>
  );
}
