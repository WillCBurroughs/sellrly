import React from 'react';
import '../../index.css';
import TertiaryButton from '../atoms/TertiaryButton';
import AboveFoldImage from '../atoms/AboveFoldImage';


function HomeAboveFoldMobileMobile(props) {
  return (
    <div className='contentMobileHome'>
        <div className='leftHeroAboveFoldMobile'>
            <h1 className='adjustHeaderSize'>
                Social Sellers! <br></br>
                Outsell. Outshine. Outdo.
            </h1>
            <p className='adjustPSize'>You’ve worked hard. You picked great merchandise. Your set is picture-perfect. 
                You’ve practiced your pitch so much your dog can recite it. Yet when game time came, 
                you had fewer viewers than a group chat at 3 a.m.</p>
            <p className='adjustPSize'> 
                It’s not you—you did your job. But let’s face it: there’s a lot of noise out there.
            </p>
            <p className='adjustPSize'>
                <strong>Sellrly </strong>changes all that. We help you reach the audience your platform is missing.
            </p>
            <TertiaryButton text = "Get Started" />
        </div>

        <div className='rightHeroAboveFoldMobile'>
            <AboveFoldImage imgClass = "adjustSizingAboveFoldIMG" />
        </div>
    </div>
  );
}

export default HomeAboveFoldMobileMobile;