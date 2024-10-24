import { NavLink } from "../NavLink.jsx/NavLink";
import "./NavBarStyle.css";

export function NavBar() {
  return (
    <div className="nav-bar">
      <NavLink text="Collections" />
      <NavLink text="Men" />
      <NavLink text="Women" />
      <NavLink text="About" />
      <NavLink text="Contact" />
    </div>
  );
}
