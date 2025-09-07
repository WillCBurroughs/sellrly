import React from "react";
import '../../index.css';
import HomeAboveFoldMobileMobile from "../molecules/HomeAboveFoldMobile";
import VideoMobileHome from "../molecules/VideoMobileHome";
import BenefitsMobile from "../molecules/BenefitsMobile";

function HomePageMobile(props) {
  return (
    <>
        <HomeAboveFoldMobileMobile/>
        <VideoMobileHome/>
        <BenefitsMobile/>
    </>
  );
}

export default HomePageMobile;