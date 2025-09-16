import React from "react";
import '../../index.css';
import useWindowSize from "../../hooks/UseWindowSize";
import AboutUsDesktop from "../templates/AboutUsDesktop";
import AboutUsMobile from '../templates/AboutUsMobile';

function AboutUsAll(props) {

    const isMobile = useWindowSize();

    return (
        <>
            {isMobile ? <AboutUsMobile /> : <AboutUsDesktop /> }
        </>
    );
}

export default AboutUsAll;