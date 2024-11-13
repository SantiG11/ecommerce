import { useContext, useEffect, useState } from "react";
import { CartButton } from "../CartButton/CartButton";
import { Logo } from "../Logo/Logo";
import { NavBar } from "../NavBar/NavBar";
import { UserIcon } from "../UserIcon/UserIcon";
import "./HeaderComponentStyle.css";
import { EcommerceContext } from "../../context/EcommerceContext";
import { OpenBarButton } from "../OpenBarButton/OpenBarButton";
import { ModalBackdrop } from "../ModalBackdrop/ModalBackdrop";

export function HeaderComponent() {
  const [openNav, setOpenNav] = useState();
  const { modalBackdrop, setModalBackdrop } = useContext(EcommerceContext);

  useEffect(() => {
    if (window.innerWidth > 800) {
      setOpenNav(true);
    } else {
      setOpenNav(false);
      setModalBackdrop(false);
    }
  }, []);

  window.addEventListener("resize", () => {
    if (window.innerWidth > 800) {
      setOpenNav(true);
    } else {
      setOpenNav(false);
      setModalBackdrop(false);
    }
  });

  const handleCloseNav = () => {
    setOpenNav(false);
    setModalBackdrop(false);
  };

  const handleOpenNav = () => {
    setOpenNav(true);
    setModalBackdrop(true);
  };

  return (
    <header style={{ position: modalBackdrop && "relative" }}>
      {openNav === false && <OpenBarButton openBar={handleOpenNav} />}
      <Logo />
      <NavBar closeBar={handleCloseNav} open={openNav} />
      <div className="right-buttons-container">
        <CartButton />
        <UserIcon />
      </div>
    </header>
  );
}
