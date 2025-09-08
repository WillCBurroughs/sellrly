import React from 'react';
import '../../index.css';
import TertiaryButton from '../atoms/TertiaryButton';
import DesktopFAQSDropdown from '../atoms/DesktopFAQSDropdown';


function MobileBottomSection(props) {
  return (
    <div className='FAQSMobile' id= {props.id}>
        <div className='leftHeroAboveFold'>
            <h1>
                Frequently Asked Questions
            </h1>
            <p className='blr' id='faqMobile'>We serve as a convenient resource for users, customers, or readers to find solutions to their queries.</p>
        </div>

        <div className='rightHeroAboveFold'>
            <DesktopFAQSDropdown id = "mobileDropdown" />
        </div>
    </div>
  );
}

export default MobileBottomSection;