import React from "react";
import '../../index.css';
import useWindowSize from "../../hooks/UseWindowSize";
import ContactUsDesktop from "../templates/ContactUsDesktop";
import ContactUsMobile from '../templates/ContactUsMobile';

function ContactUsAll(props) {

    const isMobile = useWindowSize();

    return (
        <>
            {isMobile ? <ContactUsMobile /> : <ContactUsDesktop /> }
        </>
    );
}

export default ContactUsAll;