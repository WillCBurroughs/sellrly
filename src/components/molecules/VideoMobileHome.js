import React, { useRef, useEffect } from 'react';
import '../../index.css';
import EmphasisIcon from '../atoms/EmphasisIcon';
import alternativePoster from '../../images/AlternativePoster.webp';

function VideoMobileHome(props) {
  const videoRef = useRef(null);

  // Assign src dynamically after mount
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.src = "/video/SocialSelling.mp4";
    }
  }, []);

  const handlePlay = () => {
    const video = videoRef.current;
    if (video && video.paused) {
      video.play();
    }
  };

  return (
    <div className='VideoMobileHome'>
      <div className='holdEmphasisMobile'>
        <EmphasisIcon text="How it Works" />
      </div>
      <div>
        <h1 className='adjustHeaderSize'>
          What makes Sellrly the best platform for social sellers?
        </h1>
      </div>
      <div className='videoAreaMobile' onClick={handlePlay}>
        <video
          ref={videoRef}
          className="videoPlayer"
          width="100%"
          height= "80%"
          preload="none"
          controls
          poster={alternativePoster}
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default VideoMobileHome;