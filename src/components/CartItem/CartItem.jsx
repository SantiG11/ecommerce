import "./CartItemStyle.css";

export function CartItem({ item, id, handleDelete }) {
  return (
    <div className="cart-item" id={id}>
      <img
        src={`${item.images[0]}`}
        alt="item-image"
        className="cart-item-img"
      />
      <div className="cart-item-details">
        <p className="cart-item-name">{item.name}</p>
        <div className="cart-item-price-container">
          <p className="cart-item-price">{item.price}</p>
          <p className="cart-item-amount">x{item.amount}</p>
          <p className="cart-item-total">total amount</p>
        </div>
      </div>
      <div className="delete-icon-container">
        <img
          src="src\assets\icon-delete.svg"
          alt="delete-icon"
          className="delete-icon"
          onClick={handleDelete}
        />
      </div>
    </div>
  );
}
