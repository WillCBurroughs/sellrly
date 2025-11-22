import React from 'react';
import '../../index.css';
import TertiaryButton from '../atoms/TertiaryButton';


function AboutUsMobileFold(props) {
  return (
    <div className='contentMobileAbout'>
        <div className='leftHeroAboveFoldMobile'>
            <h1 className='adjustHeaderSize'>
                More Eyes. More Buyers. No Walls.
            </h1>
            <p className='adjustPSize'>
                We built Sellrly because we’ve been in your shoes—finding customers is tough, 
                no matter how great your products or stream are. Sellrly gets your stream in front of the right people, 
                across the entire web, cutting through the noise that keeps you invisible on other platforms.
            </p>

            <TertiaryButton text = "Get Started" />
        </div>

    </div>
  );
}

export default AboutUsMobileFold;