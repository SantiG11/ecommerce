import { useState, useEffect, useContext } from "react";
import { EcommerceContext } from "../context/EcommerceContext";

export const useOpenNav = () => {
    const [openNav, setOpenNav] = useState();
    const { modalBackdrop, setModalBackdrop } = useContext(EcommerceContext);

    useEffect(() => {
        if (window.innerWidth > 800) {
            setOpenNav(true);
            setModalBackdrop(false);
        } else {
            setOpenNav(false);
            setModalBackdrop(false);
        }
    }, []);

    window.addEventListener("resize", () => {
        if (window.innerWidth > 800) {
            setOpenNav(true);
            setModalBackdrop(false);
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

    return {
        openNav,
        handleCloseNav,
        handleOpenNav,
        modalBackdrop
    }
}