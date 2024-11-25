import { CartButton } from "../CartButton/CartButton";
import { Logo } from "../Logo/Logo";
import { NavBar } from "../NavBar/NavBar";
import { UserIcon } from "../UserIcon/UserIcon";
import "./HeaderComponentStyle.css";

import { OpenBarButton } from "../OpenBarButton/OpenBarButton";
import { useOpenNav } from "../../logic/useOpenNav";

export function HeaderComponent() {
  const { openNav, handleCloseNav, handleOpenNav, modalBackdrop } =
    useOpenNav();

  return (
    <header
      style={{
        position: modalBackdrop && "relative",
        zIndex: modalBackdrop && "unset",
      }}
    >
      {openNav === false && <OpenBarButton openBar={handleOpenNav} />}
      <Logo />
      <NavBar closeBar={handleCloseNav} open={openNav} />
      <div className="right-buttons-container">
        <CartButton />
      </div>
    </header>
  );
}
