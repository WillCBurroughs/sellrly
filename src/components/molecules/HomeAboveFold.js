import React from 'react';
import '../../index.css';
import TertiaryButton from '../atoms/TertiaryButton';
import AboveFoldImage from '../atoms/AboveFoldImage';

function HomeAboveFold(props) {
  return (
    <div className='contentBlock'>
        <div className='leftHeroAboveFold'>
            <h1>
                Outsell. Outshine. Outdo.
            </h1>
            <p>You’ve worked hard. You picked great merchandise. Your set is picture-perfect. 
                You’ve practiced your pitch so much your dog can recite it. Yet when game time came, 
                you had fewer viewers than a group chat at 3 a.m.</p>
            <p>
                It’s not you—you did your job. But let’s face it: there’s a lot of noise out there.
            </p>
            <p>
                <strong>Sellrly </strong>changes all that.
            </p>
            <TertiaryButton text = "Get Started" />
        </div>

        <div className='rightHeroAboveFold'>
            <AboveFoldImage />
        </div>
    </div>
  );
}

export default HomeAboveFold;