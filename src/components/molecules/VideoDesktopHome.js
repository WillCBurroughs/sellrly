import React from 'react';
import '../../index.css';
import EmphasisIcon from '../atoms/EmphasisIcon';
import VideoPoster from '../../images/ImagePoster.png';


function VideoDesktopHome(props) {
  return (
    <div className='VideoDesktopHome'>
        <div>
            <EmphasisIcon text = "How it Works" />
        </div>
        <div>
            <h1 id='forJump'>
                What makes Sellrly the best platform for social sellers?
            </h1>
        </div>
        <div className='videoArea'>
            <video
            className="videoPlayer"
            width="100%"
            height="auto"
            preload="metadata"
            controls
            >
            <source src="/video/SocialSelling.mp4" type="video/mp4" />
            Your browser does not support the video tag.
            </video>
        </div>
    </div>
  );
}

export default VideoDesktopHome;