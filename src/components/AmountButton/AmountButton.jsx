import "./AmountButtonStyle.css";

export function AmountButton() {
  return (
    <div className="amount-button">
      <div className="minus">
        <img src="src\assets\icon-minus.svg" alt="minus-icon" />
      </div>
      <p className="amount">0</p>
      <div className="plus">
        <img src="src\assets\icon-plus.svg" alt="plus-icon" />
      </div>
    </div>
  );
}
