import React from "react";
import '../../index.css';
import AboveFoldContactUsMobile from "../molecules/AboveFoldContactUsMobile";
import ContactFormMobile from "../atoms/ContactFormMobile";

function ContactUsMobile(props) {
  return (
    <>
        <AboveFoldContactUsMobile/>
        <ContactFormMobile/>
    </>
  );
}

export default ContactUsMobile;