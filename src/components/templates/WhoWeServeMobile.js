import React from "react";
import '../../index.css';
import WhoWeServeAboveFold from "../molecules/WhoWeServeAboveFold";
import WhoWeServeContainerMobile from "../molecules/WhoWeServeContainerMobile";

function WhoWeServeMobile(props) {
  return (
    <>
    <WhoWeServeAboveFold/>
    <WhoWeServeContainerMobile/>
    </>
  );
}

export default WhoWeServeMobile;