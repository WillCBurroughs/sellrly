import React from "react";
import '../../index.css';
import ServicesAboveFold from "../molecules/ServicesAboveFold";
import ServicesServicesDesktop from "../molecules/ServicesServicesDesktop";
import TransformCampaignSectionDesktop from "../atoms/TransformCampaignSectionDesktop";
import FAQSDesktop from "../molecules/FAQSDesktop";
import PreFooterDesktop from "../molecules/PreFooterDesktop";
import FooterDesktop from "../molecules/FooterDesktop";

function ServicesDesktop(props) {
  return (
    <>
    <ServicesAboveFold/>
    <ServicesServicesDesktop/>
    <TransformCampaignSectionDesktop id = "TransformServices"/>
    <FAQSDesktop id = "FAQSDesktopServices"/>
    <PreFooterDesktop id = "PreFooterDesktopServices"/>
    <FooterDesktop id = "FooterDesktopServices" />
    </>
  );
}

export default ServicesDesktop;