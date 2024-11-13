import { CloseBarButton } from "../CloseBarButton/CloseBarButton";
import { NavLink } from "../NavLink.jsx/NavLink";
import "./NavBarStyle.css";

export function NavBar({ closeBar, open }) {
  return (
    <div className="nav-bar" style={{ display: open ? "flex" : "none" }}>
      <div className="close-container">
        <CloseBarButton close={closeBar} />
      </div>

      <NavLink text="Collections" />
      <NavLink text="Men" />
      <NavLink text="Women" />
      <NavLink text="About" />
      <NavLink text="Contact" />
    </div>
  );
}
