import React from "react";
import '../../index.css';
import WhoWeServeAboveFold from "../molecules/WhoWeServeAboveFold";
import WhoWeServeContainerMobile from "../molecules/WhoWeServeContainerMobile";
import MobileBottomSection from "../molecules/MobileBottomSection";

function WhoWeServeMobile(props) {
  return (
    <>
    <WhoWeServeAboveFold/>
    <WhoWeServeContainerMobile/>
    <MobileBottomSection spacer = "WhoWeServeSpacing" prefooterid = "holdingCorrect" prefooterdesktop = "adjustMobile" newclassbigdiv = "newclassbigdiv" />
    </>
  );
}

export default WhoWeServeMobile;