import React from "react";
import '../../index.css';
import HomeAboveFoldMobileMobile from "../molecules/HomeAboveFoldMobile";
import VideoMobileHome from "../molecules/VideoMobileHome";
import BenefitsMobile from "../molecules/BenefitsMobile";
import MobileBottomSection from '../molecules/MobileBottomSection';

function HomePageMobile(props) {
  return (
    <>
        <HomeAboveFoldMobileMobile/>
        <VideoMobileHome/>
        <BenefitsMobile/>
        <MobileBottomSection prefooterid = "holdingCorrect" prefooterdesktop = "adjustMobile" newclassbigdiv = "newclassbigdiv" />
    </>
  );
}

export default HomePageMobile;