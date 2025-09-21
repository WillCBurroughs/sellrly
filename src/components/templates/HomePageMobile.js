import React from "react";
import '../../index.css';
import HomeAboveFoldMobileMobile from "../molecules/HomeAboveFoldMobile";
import VideoMobileHome from "../molecules/VideoMobileHome";
import BenefitsMobile from "../molecules/BenefitsMobile";
import MobileBottomSection from '../molecules/MobileBottomSection';
import ComparisonMobile from "../molecules/ComparisonMobile";

function HomePageMobile(props) {
  return (
    <>
        <HomeAboveFoldMobileMobile/>
        <VideoMobileHome/>
        <BenefitsMobile/>
        <ComparisonMobile/>
        <MobileBottomSection spacer = "homeSpacer" prefooterid = "holdingCorrect" prefooterdesktop = "adjustMobile" newclassbigdiv = "newclassbigdiv" />
    </>
  );
}

export default HomePageMobile;