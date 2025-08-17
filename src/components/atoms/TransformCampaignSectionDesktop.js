
import React from 'react';
import '../../index.css'
import Shapes from '../../images/Shapes.svg'

function TransformCampaignSectionDesktop(props) {
  return (
        <div className='TransformCampaignDesktop' id = {props.id}>
            <div className='TransformCampaignDesktopTextHolder'>

            </div>
            <div className='TransformCampaignDesktopImageHolder'>
                <img className='ImageInCampaignDesktop' src= {Shapes}/>
            </div>
        </div>
  );
}

export default TransformCampaignSectionDesktop;
