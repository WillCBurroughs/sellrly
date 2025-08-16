import React from 'react';
import '../../index.css';
import TertiaryButton from '../atoms/TertiaryButton';
import AboveFoldImage from '../atoms/AboveFoldImage';
import ServicesAboveFoldImage from '../../images/ServicesHeader.svg';


function ServicesAboveFold(props) {
  return (
    <div className='contentBlockServices'>
        <div className='leftHeroAboveFold'>
            <h1>
                Sell Like Never Before
            </h1>
            <p>Built for live sellers who want more than crumbs. We blast your stream across the web and show you exactly what’s working.</p>
            <TertiaryButton text = "Get Started" />
        </div>

        <div className='rightHeroAboveFold'>
            <AboveFoldImage src = {ServicesAboveFoldImage}/>
        </div>
    </div>
  );
}

export default ServicesAboveFold;