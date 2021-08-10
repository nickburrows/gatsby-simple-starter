import React from "react"

function VideoWrapper({ videoId }) {
  return (
    <div className="theme-dark bg-primary text-text-main min-h-screen">
      <p className="text-2xl text-center py-2 font-extrabold">
        Youtube PiP (Safari)
      </p>
      <div className="video-player">
        <iframe
          title="Youtube Video"
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${videoId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  )
}

export default VideoWrapper
