import { useState } from "react";
import "./NavLinkStyle.css";

export function NavLink({ text }) {
  return (
    <div className="nav-link">
      <p className="link">{text}</p>
    </div>
  );
}
