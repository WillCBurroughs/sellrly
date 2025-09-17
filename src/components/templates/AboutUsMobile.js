import React from "react";
import '../../index.css';
import AboutUsMobileFold from "../molecules/AboutUsMobileFold";
import AboutUsMobileTopSectionsContainer from '../molecules/AboutUsMobileTopSectionsContainer';
import HoldOurTeamMobile from "../molecules/HoldOurTeamMobile";
import MobileBottomSection from "../molecules/MobileBottomSection";

function WhoWeServeMobile(props) {
  return (
    <>
        <AboutUsMobileFold/>
        <AboutUsMobileTopSectionsContainer/>
        <HoldOurTeamMobile/>
        <MobileBottomSection spacer = "AboutUsSpacing" prefooterid = "holdingCorrect" prefooterdesktop = "adjustMobile" newclassbigdiv = "newclassbigdiv" />
    </>
  );
}

export default WhoWeServeMobile;