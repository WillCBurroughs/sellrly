import React from 'react';
import '../../index.css';
import EmphasisIcon from '../atoms/EmphasisIcon';
import ContactFormDesktop from '../atoms/ContactFormDesktop';

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
            <ContactFormDesktop/>
        </div>
    </div>
  );
}

export default ContactUsDesktopFold;