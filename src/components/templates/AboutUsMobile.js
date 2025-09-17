import React from "react";
import '../../index.css';
import AboutUsMobileFold from "../molecules/AboutUsMobileFold";
import AboutUsMobileTopSectionsContainer from '../molecules/AboutUsMobileTopSectionsContainer';
import HoldOurTeamMobile from "../molecules/HoldOurTeamMobile";

function WhoWeServeMobile(props) {
  return (
    <>
        <AboutUsMobileFold/>
        <AboutUsMobileTopSectionsContainer/>
        <HoldOurTeamMobile/>
    </>
  );
}

export default WhoWeServeMobile;