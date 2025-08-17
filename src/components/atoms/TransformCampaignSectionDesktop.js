
import React from 'react';
import '../../index.css'
import Shapes from '../../images/Shapes.svg'
import SecondaryButton from './SecondaryButton';

function TransformCampaignSectionDesktop(props) {
  return (
        <div className='TransformCampaignDesktop' id = {props.id}>
            <div className='TransformCampaignDesktopTextHolder'>
                <h5 className='TransformSellingDesktop'>
                    Transform your social selling experience
                </h5>
                <p className='TakePlatformCampaignDesktop'>
                    Take your platform to the next level, amplify your reach, and sell more than ever before
                </p>
                <SecondaryButton text = "Start a Campaign Now" id = "StartCampaignNowBTN" />
            </div>
            <div className='TransformCampaignDesktopImageHolder'>
                <img className='ImageInCampaignDesktop' src= {Shapes}/>
            </div>
        </div>
  );
}

export default TransformCampaignSectionDesktop;
