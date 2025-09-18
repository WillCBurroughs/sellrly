import React from "react";
import '../../index.css';
import AboveFoldContactUsMobile from "../molecules/AboveFoldContactUsMobile";
import ContactFormMobile from "../atoms/ContactFormMobile";
import MobileBottomSection from "../molecules/MobileBottomSection";

function ContactUsMobile(props) {
  return (
    <>
        <AboveFoldContactUsMobile/>
        <ContactFormMobile/>
        <MobileBottomSection spacer = "ContactUsSpacing" prefooterid = "holdingCorrect" prefooterdesktop = "adjustMobile" newclassbigdiv = "newclassbigdiv" />
    </>
  );
}

export default ContactUsMobile;