import React from 'react';
import '../../index.css';
import TertiaryButton from '../atoms/TertiaryButton';
import WhoWeServe from '../../images/WhoWeServe.svg'
import AboveFoldImage from '../atoms/AboveFoldImage';
import EmphasisIcon from '../atoms/EmphasisIcon';

function ContactUsDesktopFold(props) {
  return (
    <div className='contentBlockWhoWeServe'>
        <div className='leftHeroAboveFoldServies' id = "HoldContactUsLeft">
            <h1>
                Got questions? We’ve got answers.
            </h1>
            <p>
                Not sure where to start? Just drop us a message and we’ll point you in the right direction. 
            </p>
            <div className='HoldLinksForWhoWeServe'>
                <EmphasisIcon text = "Phone" />
                <EmphasisIcon text = "Email"/>
            </div>
        </div>

        <div className='rightHeroAboveFold'>
            <AboveFoldImage src = {WhoWeServe}/>
        </div>
    </div>
  );
}

export default ContactUsDesktopFold;