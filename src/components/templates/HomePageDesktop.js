import React from "react";
import '../../index.css';
import HomeAboveFold from "../molecules/HomeAboveFold";
import JumpDownButton from "../atoms/JumpDownButton";
import VideoDesktopHome from "../molecules/VideoDesktopHome";
import BenefitsDesktop from "../molecules/BenefitsDesktop";
import ComparisonDesktop from "../molecules/ComparisonDesktop";
import FAQSDesktop from "../molecules/FAQSDesktop";
import PreFooterDesktop from "../molecules/PreFooterDesktop";
import FooterDesktop from "../molecules/FooterDesktop";

function HomePageDesktop(props) {
  return (
    <>
      <HomeAboveFold/>
      <JumpDownButton/>
      <VideoDesktopHome/>
      <BenefitsDesktop/>
      <ComparisonDesktop/>
      <FAQSDesktop/>
      <PreFooterDesktop/>
      <FooterDesktop/>
    </>
  );
}

export default HomePageDesktop;