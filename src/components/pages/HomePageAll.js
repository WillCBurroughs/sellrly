import React from "react";
import '../../index.css';
import useWindowSize from "../../hooks/UseWindowSize";
import HomePageDesktop from "../templates/HomePageDesktop";
import HomePageMobile from '../templates/HomePageMobile';

function HomePageAll(props) {

    const isMobile = useWindowSize();

    return (
        <>
            {isMobile ? <HomePageMobile /> : <HomePageDesktop /> }
        </>
    );
}

export default HomePageAll;