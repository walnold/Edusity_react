import React, { useRef } from 'react'
import "./VideoPlayer.css"
import video from "../../assets/college-video.mp4"

const VideoPlayer = ({playVideo, handlePlay}) => {

  const player = useRef(null)

  const closePlayer = (e)=>{
    if(e.target === player.current){
      handlePlay()
    }
  }
  return (
    <div ref={player} onClick={closePlayer} className={`video-player ${playVideo && "hide"}`}>

      <video src={video} autoPlay muted controls></video>
      
    </div>
  )
}

export default VideoPlayer
