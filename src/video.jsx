import React, { useState, useRef } from 'react';
import video from './assets/video.mp4';

const video = () => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const handleReplay = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      setPlaying(true);
    }
  };

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setPlaying(true);
      } else {
        videoRef.current.pause();
        setPlaying(false);
      }
    }
  };

  return (
    <div>
        <video
        src={video}
        ref={videoRef}
        onClick={handleVideoClick}
        onPause={() => setPlaying(false)}
        onPlay={() => setPlaying(true)}
        width={"500"}
        muted
      />
      {!playing && (
        <button onClick={handleReplay}>Play</button>
      )}
    </div>
  )
}

export default video