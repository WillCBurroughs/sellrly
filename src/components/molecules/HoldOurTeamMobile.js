import React from 'react';
import '../../index.css';
import EmphasisIcon from '../atoms/EmphasisIcon';
import AboutUsFounder from '../atoms/AboutUsFounder';
import PaulMobile from '../../images/PaulMobile.png';
import AndrewMobile from '../../images/AndrewMobile.png';

function HoldOurTeamMobile(props) {
  return (
    <>
    <div className='holdOurTeamMobile'>
        <EmphasisIcon text = "Our Team"/>
        <h4>
            Meet the experts behind Sellrly
        </h4>
        <div>
        <AboutUsFounder src = {PaulMobile} imgID = "AdjustFounderSize"/>
        <AboutUsFounder src = {AndrewMobile} imgID = "AdjustFounderSize"/>
        </div>
    </div>
    </>
  );
}

export default HoldOurTeamMobile;