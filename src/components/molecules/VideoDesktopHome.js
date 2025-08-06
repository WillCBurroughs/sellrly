import React from 'react';
import '../../index.css';
import EmphasisIcon from '../atoms/EmphasisIcon';


function VideoDesktopHome(props) {
  return (
    <div className='VideoDesktopHome'>
        <div>
            <EmphasisIcon text = "How it Works" />
        </div>
        <div>
            <h1>
                What makes Sellrly the best platform for social sellers?
            </h1>
        </div>
        <div className='videoArea'>
            <video
                className="videoPlayer"
                width="100%"
                height="auto"
                id='videoHome'
                controls
            >
            <source src="/videos/intro.mp4" type="video/mp4" />
            Your browser does not support the video tag.
            </video>
        </div>
    </div>
  );
}

export default VideoDesktopHome;