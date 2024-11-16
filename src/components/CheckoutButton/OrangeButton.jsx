import "./OrangeButtonStyle.css";

export function OrangeButton({ text, action }) {
  return (
    <div className="orange-button" onClick={action}>
      <p>{text}</p>
    </div>
  );
}
