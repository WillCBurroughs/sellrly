import React from "react";
import '../../index.css';
import useWindowSize from "../../hooks/UseWindowSize";
import TermsOfServiceMobile from "../templates/TermsOfServiceMobile";
import TermsOfServiceDesktop from '../templates/TermsOfServiceDesktop';

function ServicesPageAll(props) {

    const isMobile = useWindowSize();

    return (
        <>
            {isMobile ? <TermsOfServiceMobile /> : <TermsOfServiceDesktop /> }
        </>
    );
}

export default ServicesPageAll;