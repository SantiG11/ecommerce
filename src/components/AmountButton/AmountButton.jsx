import { useEffect, useState } from "react";
import "./AmountButtonStyle.css";
import plusIcon from "/src/assets/icon-plus.svg";
import minusIcon from "/src/assets/icon-minus.svg";

export function AmountButton({ item }) {
  const [amount, setAmount] = useState(item.amount);

  const handleSubstract = () => {
    item.substractAmount();
    setAmount(item.amount);
  };

  const handleAdd = () => {
    item.addAmount();
    setAmount(item.amount);
  };

  useEffect(() => {
    if (item.amount === 0) {
      setAmount(item.amount);
    }
  }, [item.amount]);

  return (
    <div className="amount-button">
      <div className="minus" onClick={handleSubstract}>
        <img src={minusIcon} alt="minus-icon" />
      </div>
      <p className="amount">{amount}</p>
      <div className="plus" onClick={handleAdd}>
        <img src={plusIcon} alt="plus-icon" />
      </div>
    </div>
  );
}
