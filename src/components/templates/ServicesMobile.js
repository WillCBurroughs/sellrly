import React from "react";
import '../../index.css';
import ServicesAboveFoldMobile from "../molecules/ServicesAboveFoldMobile";
import ServicesServicesMobile from "../molecules/ServicesServicesMobile";
import MobileBottomSection from "../molecules/MobileBottomSection";

function ServicesMobile(props) {
  return (
    <>
    <ServicesAboveFoldMobile/>
    <ServicesServicesMobile/>
    <MobileBottomSection spacer = "servicesSpacing" prefooterid = "holdingCorrect" prefooterdesktop = "adjustMobile" newclassbigdiv = "newclassbigdiv" />
    
    {/* <ServicesServicesDesktop/>
    <TransformCampaignSectionDesktop id = "TransformServices"/>
    <FAQSDesktop id = "FAQSDesktopServices"/>
    <PreFooterDesktop id = "PreFooterDesktopServices"/>
    <FooterDesktop id = "FooterDesktopServices" /> */} 
    </>
  );
}

export default ServicesMobile;