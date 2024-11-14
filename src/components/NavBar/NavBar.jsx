import { CloseButton } from "../CloseButton/CloseButton";
import { NavLink } from "../NavLink.jsx/NavLink";
import "./NavBarStyle.css";

export function NavBar({ closeBar, open }) {
  return (
    <div className="nav-bar" style={{ display: open ? "flex" : "none" }}>
      <div className="close-container">
        <CloseButton close={closeBar} />
      </div>

      <NavLink text="Collections" />
      <NavLink text="Men" />
      <NavLink text="Women" />
      <NavLink text="About" />
      <NavLink text="Contact" />
    </div>
  );
}
