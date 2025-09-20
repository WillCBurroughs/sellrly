import React from 'react';
import '../../index.css';
import TertiaryButton from '../atoms/TertiaryButton';
import EmphasisIcon from '../atoms/EmphasisIcon';

function AboutUsMobileFold(props) {
  return (
    <div className='contentMobileAbout'>
        <div className='leftHeroAboveFoldMobile'>
            <h4 className='adjustHeaderSize'>
                Got questions? We’ve got answers.
            </h4>
            <p className='adjustPSize'>
                Not sure where to start? Just drop us a message and we’ll point you in the right direction.
            </p>
            <div>
                <EmphasisIcon text = "Phone"/>
                <EmphasisIcon text = "Email"/>
            </div>
        </div>

    </div>
  );
}

export default AboutUsMobileFold;