import React from 'react';
import '../../index.css'
import BenefitDesktopServices from "../atoms/BenefitDesktopServices";
import WhoWeServeSectionDesktop from '../atoms/WhoWeServeSectionDesktop';
import ElectricSunset from '../../images/ElectricSunset.svg';
import TropicalSurf from '../../images/tropical_surf.svg';
import Glowfall from '../../images/Glowfall.svg';
import LightPurple from '../../images/Light_Purple.svg'
import Boutique from '../../images/Boutique.svg'



function WhoWeServeContainerDesktop(props) {
  return (
    
    <div className='holdWhoWeServe'>
        <WhoWeServeSectionDesktop 
            emphasis = "Fashion" 
            headerText = "Boutique Clothing Brand"
            src = {Boutique}
            firstLine = "Boost live stream views and sales during drops"
            secondLine = "Target ads for stylish buyers on fashion blogs"
            thirdLine = "Retarget viewers during peak hours"
            fourthLine = "High Audience Growth"
            fifthLine = "Increased Conversion rate"
            sixthLine = "Revenue Surge"
         />

        <BenefitDesktopServices
            headerText = "Track your analytics" 
            id = "TrackYourAnalytics"
            secondaryHeader = "Know What’s Working. Drop What’s Not." 
            paragraphContent = "Sellrly’s analytics show you who’s watching, clicking, and buying—so you can boost what slaps and ditch what flops.Track it. Hack it. Cash it."
            paragraphContentSecondary = "Track it. Hack it. Cash it."
            src = {TropicalSurf}
        />
        <BenefitDesktopServices 
            headerText = "Get more views" 
            id = "GetMoreViews"
            secondaryHeader = "100M+ U.S. shoppers buy from live sellers." 
            paragraphContent = "100M+ U.S. shoppers buy from live sellers. TikTok and Whatnot only reach a slice."
            paragraphContentSecondary = "Sellrly goes bigger pushing your stream across the entire web to the right people, at the right time."
            src = {Glowfall}
        />
        <BenefitDesktopServices
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

export default WhoWeServeContainerDesktop;