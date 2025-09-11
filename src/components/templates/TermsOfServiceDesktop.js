import React from "react";
import '../../index.css';
import TopSectionTerms from "../molecules/TopSectionTerms";

function TermsOfServiceDesktop(props) {
  return (
    <>
        <div className="holdDesktop">
            <TopSectionTerms 
            text = "Sellrly Terms of Service"
            subtext = "Effective 19 August 2025"
            maintext = "Welcome to Sellrly. These Terms of Service (“Terms”) govern your access to and use of the Sellrly platform, website, applications, tools, and services (collectively, the “Platform”). By accessing or using the Platform, you agree to be bound by these Terms. If you do not agree, do not use Sellrly."
            />
        </div>
    </>
  );
}

export default TermsOfServiceDesktop;

        // <h2>{props.text}</h2>
        // <p className='subtext'>{props.subtext}</p>
        // <p className='mainText'>{props.maintext}</p>