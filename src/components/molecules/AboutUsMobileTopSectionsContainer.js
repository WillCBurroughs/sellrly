import React from 'react';
import '../../index.css'
import AboutUsTopSections from '../atoms/AboutUsTopSections';
import HobbyReseller from '../../images/HobbyResaler.svg';
import Boutique from '../../images/Boutique.svg';



function AboutUsMobileTopSectionsContainer(props) {
  return (
    
    <div className='holdAboutUsTopSections'>
        <AboutUsTopSections 
            addSpace = "AddSpaceTop"
            emphasis = "Fashion" 
            headerText = "Boutique Clothing Brand"
            src = {Boutique}
         />
        <AboutUsTopSections 
            emphasis = "Sports Cards & Collectables" 
            headerText = "Hobby Seller on Whatnot"
            src = {HobbyReseller}
         />
    </div>
  );
}

export default AboutUsMobileTopSectionsContainer;