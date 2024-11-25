import { Link } from "react-router-dom";
import { CloseButton } from "../CloseButton/CloseButton";
import { NavLink } from "../NavLink.jsx/NavLink";
import "./NavBarStyle.css";

export function NavBar({ closeBar, open }) {
  return (
    <div className="nav-bar" style={{ display: open ? "flex" : "none" }}>
      <div className="close-container">
        <CloseButton close={closeBar} />
      </div>

      <Link className="nav-link" to="/">
        <p className="link">Home</p>
      </Link>
      <Link className="nav-link" to="/men">
        <p className="link">Men</p>
      </Link>
      <Link className="nav-link" to="/women">
        <p className="link">Women</p>
      </Link>
    </div>
  );
}
