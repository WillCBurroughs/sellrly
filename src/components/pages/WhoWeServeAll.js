import React from "react";
import '../../index.css';
import useWindowSize from "../../hooks/UseWindowSize";
import WhoWeServeDesktop from "../templates/WhoWeServeDesktop";
import WhoWeServeMobile from '../templates/WhoWeServeMobile';

function ServicesPageAll(props) {

    const isMobile = useWindowSize();

    return (
        <>
            {isMobile ? <WhoWeServeMobile /> : <WhoWeServeDesktop /> }
        </>
    );
}

export default ServicesPageAll;