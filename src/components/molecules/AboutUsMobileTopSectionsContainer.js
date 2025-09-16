import React from 'react';
import '../../index.css'
import AboutUsTopSections from '../atoms/AboutUsTopSections';
import HobbyReseller from '../../images/HobbyResaler.svg';
import Boutique from '../../images/Boutique.svg';



function AboutUsMobileTopSectionsContainer(props) {
  return (
    
    <div className='holdAboutUsTopSections'>
        <AboutUsTopSections 
            id = "AddStandardColors"
            addSpace = "AddSpaceTop"
            headerText = "We Built Sellrly to help you Grow Your Audience"
            text = "Just set it and forget it—tell us who you want to reach, what you’re selling, and when you’re live. We handle the rest, then deliver full analytics showing exactly how much bigger—and better—your audience has become."
            src = {Boutique}
         />
        <AboutUsTopSections 
            emphasis = "Sports Cards & Collectables" 
            headerText = "No Creative? No Problem."
            text = "Missing ad assets shouldn’t stop your stream from growing. Our built-in ad creation tool turns your idea into ready-to-run ads that grab attention and drive viewers."
            src = {HobbyReseller}
         />
    </div>
  );
}

export default AboutUsMobileTopSectionsContainer;