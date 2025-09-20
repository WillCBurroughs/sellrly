import React from 'react';
import '../../index.css';
import TertiaryButton from '../atoms/TertiaryButton';
import AboveFoldImage from '../atoms/AboveFoldImage';
import ServicesAboveFoldImage from '../../images/ServicesHeader.svg';


function ServicesAboveFoldMobile(props) {
  return (
    <div className='contentMobile'>
        <div className='leftHeroAboveFoldMobile'>
            <h1 className='adjustHeaderSize'>
                Sell Like Never Before
            </h1>
            <p className='adjustPSize'>Built for live sellers who want more than crumbs. We blast your stream across the web and show you exactly what’s working.</p>
            <TertiaryButton text = "Get Started" />
        </div>

        <div className='rightHeroAboveFoldMobile'>
            <AboveFoldImage src = {ServicesAboveFoldImage} id = "holdImageServices"/>
        </div>
    </div>
  );
}

export default ServicesAboveFoldMobile;