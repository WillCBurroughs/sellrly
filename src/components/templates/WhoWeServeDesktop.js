import React from "react";
import '../../index.css';
import WhoWeServeDesktopHero from "../molecules/WhoWeServeDesktopHero";
import WhoWeServeContainerDesktop from "../molecules/WhoWeServeContainerDesktop";
import TransformCampaignSectionDesktop from "../atoms/TransformCampaignSectionDesktop";
import FAQSDesktop from "../molecules/FAQSDesktop";
import PreFooterDesktop from "../molecules/PreFooterDesktop";
import FooterDesktop from "../molecules/FooterDesktop";

function WhoWeServeDesktop(props) {
  return (
    <>
      <WhoWeServeDesktopHero/> 
      <WhoWeServeContainerDesktop/>
      <TransformCampaignSectionDesktop id = "TransformWhoWeServe"/>
      <FAQSDesktop id = "FAQSDesktopWhoWeServe"/>
      <PreFooterDesktop id = "PreFooterDesktopWhoWeServe"/>
      <FooterDesktop id = "FooterDesktopWhoWeServe" />
    </>
  );
}

export default WhoWeServeDesktop;