import React from "react";
import '../../index.css';
import FAQSDesktop from "../molecules/FAQSDesktop";
import PreFooterDesktop from "../molecules/PreFooterDesktop";
import FooterDesktop from "../molecules/FooterDesktop";
import ContactUsDesktopFold from '../molecules/ContactUsDesktopFold'

function ContactUsDesktop(props) {
  return (
    <>
      <ContactUsDesktopFold />
      <FAQSDesktop id = "FAQSDesktopContactUs"/>
      <PreFooterDesktop id = "PreFooterDesktopContactUs"/>
      <FooterDesktop id = "FooterDesktopContactUs" />
    </>
  );
}

export default ContactUsDesktop;