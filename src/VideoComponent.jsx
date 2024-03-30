import React, { useState, useRef, useeffect } from 'react';

const Video = ({video}) => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  useEffect(()=>{
    const handleReplay = () => {
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play();
        setPlaying(true);
      }
    };
    handleReplay()
  }, [])
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
    <div className='video_container'>
        <video
        src={video}
        ref={videoRef}
        onClick={handleVideoClick}
        onPause={() => setPlaying(false)}
        onPlay={() => setPlaying(true)}
        // width={"500"}
        className='video'
        muted
      />
{/*         <button onClick={!playing ? handleReplay : null }>Play</button> */}
    </div>
  )
}

export default Video
