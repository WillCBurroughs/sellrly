import React from "react";
import '../../index.css';
import useWindowSize from "../../hooks/UseWindowSize";
import PrivacyPolicyDesktop from "../templates/PrivacyPolicyDesktop";
import PrivacyPolicyMobile from '../templates/PrivacyPolicyMobile';

function PrivacyPolicyAll(props) {

    const isMobile = useWindowSize();

    return (
        <>
            {isMobile ? <PrivacyPolicyMobile /> : <PrivacyPolicyDesktop /> }
        </>
    );
}

export default PrivacyPolicyAll;