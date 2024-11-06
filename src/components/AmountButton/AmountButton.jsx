import { useEffect, useState } from "react";
import "./AmountButtonStyle.css";

export function AmountButton({ item }) {
  const [amount, setAmount] = useState(item.amount);

  const handleSubstract = () => {
    item.substractAmount();
    setAmount(item.amount);
    // console.log(item.amount);
  };

  const handleAdd = () => {
    item.addAmount();
    setAmount(item.amount);
    // console.log(item.amount);
  };

  useEffect(() => {
    // setAmount(item.amount);
    if (item.amount === 0) {
      setAmount(item.amount);
    }
  }, [item.amount]);

  return (
    <div className="amount-button">
      <div className="minus" onClick={handleSubstract}>
        <img src="src\assets\icon-minus.svg" alt="minus-icon" />
      </div>
      <p className="amount">{amount}</p>
      <div className="plus" onClick={handleAdd}>
        <img src="src\assets\icon-plus.svg" alt="plus-icon" />
      </div>
    </div>
  );
}
