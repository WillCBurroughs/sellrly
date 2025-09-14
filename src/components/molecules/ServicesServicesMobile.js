import React from 'react';
import '../../index.css'
import BenefitMobileServices from "../atoms/BenefitMobileServices";
import ElectricSunset from '../../images/ElectricSunset.svg';
import TropicalSurf from '../../images/tropical_surf.svg';
import Glowfall from '../../images/Glowfall.svg';
import LightPurple from '../../images/Light_Purple.svg'


function ServicesServicesDesktop(props) {
  return (
    <div className='holdServicesServicesMobile'>
        <BenefitMobileServices 
            headerID = "holdFirst"
            headerText = "Total Reach" 
            secondaryHeader = "The Audience Your Live Stream Deserves" 
            paragraphContent = "You could run ads on their platform… but their algorithm already ghosted you. Meanwhile, 95 million live shoppers aren’t seeing you."
            paragraphContentSecondary = "Sellrly flips the script. Your stream. Any platform. The right audience. More eyes = more sales."
            src = {ElectricSunset}
        />
        <BenefitMobileServices
            headerText = "Track your analytics" 
            id = "TrackYourAnalytics"
            secondaryHeader = "Know What’s Working. Drop What’s Not." 
            paragraphContent = "Sellrly’s analytics show you who’s watching, clicking, and buying—so you can boost what slaps and ditch what flops.Track it. Hack it. Cash it."
            paragraphContentSecondary = "Track it. Hack it. Cash it."
            src = {TropicalSurf}
        />
        <BenefitMobileServices 
            headerText = "Get more views" 
            id = "GetMoreViews"
            secondaryHeader = "100M+ U.S. shoppers buy from live sellers." 
            paragraphContent = "100M+ U.S. shoppers buy from live sellers. TikTok and Whatnot only reach a slice."
            paragraphContentSecondary = "Sellrly goes bigger pushing your stream across the entire web to the right people, at the right time."
            src = {Glowfall}
        />
        <BenefitMobileServices
            headerText = "Make more sales" 
            id = "MakeMoreSales"
            secondaryHeader = "Running ads when you’re not live?" 
            paragraphContent = "Cool for awareness—terrible for sales. Sellrly’s algorithm finds ready-to-buy shoppers while you’re streaming, putting your brand in front of the right eyes at the right time."
            paragraphContentSecondary = "More sales. More growth. No wasted spend."
            src = {LightPurple}
        />
    </div>
  );
}

export default ServicesServicesDesktop;