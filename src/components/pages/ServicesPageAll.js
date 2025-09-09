import React from "react";
import '../../index.css';
import useWindowSize from "../../hooks/UseWindowSize";
import ServicesDesktop from "../templates/ServicesDesktop";
import ServicesMobile from '../templates/ServicesMobile';

function ServicesPageAll(props) {

    const isMobile = useWindowSize();

    return (
        <>
            {isMobile ? <ServicesMobile /> : <ServicesDesktop /> }
        </>
    );
}

export default ServicesPageAll;