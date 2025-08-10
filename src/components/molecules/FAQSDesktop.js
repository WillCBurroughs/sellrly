import React from 'react';
import '../../index.css';
import TertiaryButton from '../atoms/TertiaryButton';
import AboveFoldImage from '../atoms/AboveFoldImage';


function FAQSDesktop(props) {
  return (
    <div className='contentBlock FAQS'>
        <div className='leftHeroAboveFold'>
            <h1>
                Frequently Asked Questions
            </h1>
            <p className='blr' id='faqP'>We serve as a convenient resource for users, customers, or readers to find solutions to their queries.</p>
        </div>

        <div className='rightHeroAboveFold'>
            <AboveFoldImage />
        </div>
    </div>
  );
}

export default FAQSDesktop;