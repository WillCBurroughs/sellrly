import React from 'react';
import '../../index.css';
import EmphasisIcon from '../atoms/EmphasisIcon';
import SocialSelling from '../../video/SocialSelling.mp4';

function VideoMobileHome(props) {
  return (
    <div className='VideoMobileHome'>
        <div>
            <EmphasisIcon text = "How it Works" />
        </div>
        <div>
            <h1>
                What makes Sellrly the best platform for social sellers?
            </h1>
        </div>
        <div className='videoAreaMobile'>
            <video
                className="videoPlayer"
                width="100%"
                height="auto"
                id='videoHome'
                preload="metadata"
                controls
            >
            <source src= {SocialSelling} type="video/mp4" />
            Your browser does not support the video tag.
            </video>
        </div>
    </div>
  );
}

export default VideoMobileHome;