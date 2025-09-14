import React from 'react';
import '../../index.css';
import TertiaryButton from '../atoms/TertiaryButton';
import AboveFoldImage from '../atoms/AboveFoldImage';
import ViewsMobile from '../../images/ViewsMobile.svg';
import EmphasisIcon from '../atoms/EmphasisIcon';


function WhoWeServeAboveFold(props) {
  return (
    <div className='contentMobile'>
        <div className='leftHeroAboveFoldMobile'>
            <h3>
                For Social Sellers Ready to Max Out Every Stream            
            </h3>
            <p>Sellrly blasts your stream across the web, targeting the right buyers and showing you exactly what works. More reach, more sales, no guesswork.</p>
            <TertiaryButton text = "Get Started" />
        </div>

        <div className='rightHeroAboveFoldMobile'>
            <AboveFoldImage src = {ViewsMobile} id = "holdImageServices"/>
        </div>
            <div className='HoldLinksForWhoWeServeMobile'>
                <EmphasisIcon text = "Fashion" />
                <EmphasisIcon text = "Sport Cards & Collectables"/>
                <EmphasisIcon text = "Personal Care"/>
                <EmphasisIcon text = "Tech" />
                <EmphasisIcon text = "Heath & Wellness"/>
            </div>
    </div>
  );
}

export default WhoWeServeAboveFold;