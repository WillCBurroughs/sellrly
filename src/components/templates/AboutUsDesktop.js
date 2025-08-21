import React from "react";
import '../../index.css';
import AbousUsDesktopFold from "../molecules/AboutUsDesktopFold";
import HoldBannersAboutUsDesktop from "../molecules/HoldBannersAboutUsDesktop";
import FoundersSectionDesktop from "../molecules/FoundersSectionDesktop";
import FAQSDesktop from "../molecules/FAQSDesktop";
import PreFooterDesktop from "../molecules/PreFooterDesktop";
import FooterDesktop from "../molecules/FooterDesktop";

function AboutUsDesktop(props) {
  return (
    <>
      <AbousUsDesktopFold/>
      <HoldBannersAboutUsDesktop/>
      <FoundersSectionDesktop/>
      <FAQSDesktop id = "FAQSDesktopAboutUs"/>
      <PreFooterDesktop id = "PreFooterDesktopAboutUs"/>
      <FooterDesktop id = "FooterDesktopAboutUs" />
    </>
  );
}

export default AboutUsDesktop;