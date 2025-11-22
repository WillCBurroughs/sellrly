import React from 'react';
import '../../index.css'
import AboutUsBannerDesktop from "../atoms/AboutUsBannerDesktop";
import ElectricSunset from '../../images/ElectricSunset.svg';
import TropicalSurf from '../../images/tropical_surf.svg';
import FirstAboutUsBanner from '../../images/FirstAboutUsBanner.png';
import SecondAboutUsBanner from '../../images/SecondAboutUsBanner.png'

function HoldBannersAboutUsDesktop(props) {
  return (
    <div className='holdServicesServices'>
        <AboutUsBannerDesktop 
            id = "row-reverse"
            secondaryHeader = "The Audience Your Stream Deserves" 
            paragraphContent = "Just set it and forget it—tell us who you want to reach, what you’re selling, and we handle the rest, then deliver full analytics showing exactly how much bigger—and better—your audience has become."
            src = {FirstAboutUsBanner}
        />
        <AboutUsBannerDesktop
            id = "HoldSecondBanner"
            pID = "SecondBannerPTAG"
            hID = "SecondBannerHTAG"
            secondaryHeader = "No Creative? No Problem." 
            paragraphContent = "Missing ad assets shouldn’t stop your stream from growing.
            Our built-in ad creation tool turns your idea into ready-to-run ads that grab attention and drive viewers."
            src = {SecondAboutUsBanner}
        />
    </div>
  );
}

export default HoldBannersAboutUsDesktop;