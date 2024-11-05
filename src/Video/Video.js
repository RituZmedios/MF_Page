import React from 'react';
import useIsMobile from '../isUseMobile/useMobile';

const VideoPlayer = () => {
    const isMobile = useIsMobile();
    const videoSrc = isMobile
        ? '/Css/Res-MyFinder.mp4'  
        : '/Css/Background MyFinder 1-2.mp4';   

    return (
        <div className='video-container'>
            <video
                src= {videoSrc}
                autoPlay
                loop
                playsInline
                className="responsive-video"
                width = '100%'
                height = '100%'
            />
        </div>
    );
};

export default VideoPlayer;
