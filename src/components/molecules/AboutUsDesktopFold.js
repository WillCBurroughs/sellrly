import React from 'react';
import '../../index.css';
import TertiaryButton from '../atoms/TertiaryButton';


function AbousUsDesktopFold(props) {
  return (
    <div className='AboutUsDesktopFold'>
        <h2>
            More Eyes. More Buyers. No Walls.
        </h2>
        <p className='holdAboutParagraph'>  
            We built Sellrly because we’ve been in your shoes—growing a live selling audience is tough, no matter how great your products or stream are. 
            Sellrly gets your stream in front of the right people, across the entire web, 
            exactly when you’re live—cutting through the noise that keeps you invisible on other platforms.
        </p>
        <TertiaryButton text = "Get Started" />
    </div>
  );
}

export default AbousUsDesktopFold;