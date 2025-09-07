import React from "react";
import '../../index.css';
import HomeAboveFoldMobileMobile from "../molecules/HomeAboveFoldMobile";
import VideoMobileHome from "../molecules/VideoMobileHome";

function HomePageMobile(props) {
  return (
    <>
        <HomeAboveFoldMobileMobile/>
        <VideoMobileHome/>
    </>
  );
}

export default HomePageMobile;