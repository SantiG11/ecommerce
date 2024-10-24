import { CartButton } from "../CartButton/CartButton";
import { Logo } from "../Logo/Logo";
import { NavBar } from "../NavBar/NavBar";
import { UserIcon } from "../UserIcon/UserIcon";
import "./HeaderComponentStyle.css";

export function HeaderComponent() {
  return (
    <header>
      <Logo />
      <NavBar />
      <div className="right-buttons-container">
        <CartButton />
        <UserIcon />
      </div>
    </header>
  );
}
