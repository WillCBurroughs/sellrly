import React from "react";
import '../../index.css';
import ServicesAboveFoldMobile from "../molecules/ServicesAboveFoldMobile";
import ServicesServicesDesktop from "../molecules/ServicesServicesDesktop";
import TransformCampaignSectionDesktop from "../atoms/TransformCampaignSectionDesktop";
import FAQSDesktop from "../molecules/FAQSDesktop";
import PreFooterDesktop from "../molecules/PreFooterDesktop";
import FooterDesktop from "../molecules/FooterDesktop";

function ServicesMobile(props) {
  return (
    <>
    <ServicesAboveFoldMobile/>
    {/* <ServicesServicesDesktop/>
    <TransformCampaignSectionDesktop id = "TransformServices"/>
    <FAQSDesktop id = "FAQSDesktopServices"/>
    <PreFooterDesktop id = "PreFooterDesktopServices"/>
    <FooterDesktop id = "FooterDesktopServices" /> */} 
    </>
  );
}

export default ServicesMobile;