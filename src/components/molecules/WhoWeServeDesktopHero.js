import React from 'react';
import '../../index.css';
import TertiaryButton from '../atoms/TertiaryButton';
import WhoWeServe from '../../images/WhoWeServe.svg'
import AboveFoldImage from '../atoms/AboveFoldImage';
import EmphasisIcon from '../atoms/EmphasisIcon';

function WhoWeServeDesktopHero(props) {
  return (
    <div className='contentBlockWhoWeServe'>
        <div className='leftHeroAboveFoldServies'>
            <h1>
                For Social Sellers Ready to Max Out Every Stream
            </h1>
            <p>
                Sellrly blasts your stream across the web, targeting the right buyers and 
                showing you exactly what works. More reach, more sales, no guesswork.
            </p>
            <TertiaryButton text = "Get Started" />
            <div className='HoldLinksForWhoWeServe'>
                <EmphasisIcon text = "Fashion" />
                <EmphasisIcon text = "Sport Cards & Collectables"/>
                <EmphasisIcon text = "Personal Care"/>
                <EmphasisIcon text = "Tech" />
                <EmphasisIcon text = "Heath & Wellness"/>
            </div>
        </div>

        <div className='rightHeroAboveFold'>
            <AboveFoldImage src = {WhoWeServe}/>
        </div>
    </div>
  );
}

export default WhoWeServeDesktopHero;