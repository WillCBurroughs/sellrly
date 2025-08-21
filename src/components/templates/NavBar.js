import React from "react";
import '../../index.css';
import NavBarDesktop from "../molecules/NavBarDesktop";
import NavBarMobile from "../molecules/NavBarMobile";
import useWindowSize from "../../hooks/UseWindowSize";

function NavBar(props) {
    const isMobile = useWindowSize();

  return (
    <>
        {isMobile ? <NavBarMobile /> : <NavBarDesktop /> }
    </>
  );
}

export default NavBar;