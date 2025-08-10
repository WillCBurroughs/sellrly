import React from 'react';
import '../../index.css';
import TertiaryButton from '../atoms/TertiaryButton';
import DesktopFAQSDropdown from '../atoms/DesktopFAQSDropdown';


function FAQSDesktop(props) {
  return (
    <div className='FAQS'>
        <div className='leftHeroAboveFold'>
            <h1>
                Frequently Asked Questions
            </h1>
            <p className='blr' id='faqP'>We serve as a convenient resource for users, customers, or readers to find solutions to their queries.</p>
        </div>

        <div className='rightHeroAboveFold'>
            <DesktopFAQSDropdown />
        </div>
    </div>
  );
}

export default FAQSDesktop;