import { useLocation } from "@reach/router"
import React from "react"

// const videoWrapper = document.getElementById("video-wrapper")

const videoDiv = {
  position: "relative",
  paddingBottom: "56.25%" /* 16:9 */,
  paddingTop: "25px",
  height: 0,
}

const videoPlayer = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
}

const YoutubePiP = () => {
  const location = useLocation()

  const videoParameter = new URLSearchParams(location.search).get("yt")

  const getVideoFromUrl = url => {
    // https://stackoverflow.com/a/9102270/3276759

    const regExp =
      /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\v=)([^#\\?]*).*/

    const match = regExp.exec(url)

    if (match && match[2].length === 11) {
      return match[2]
    }

    const fallbackRegex = /v=([^\\s&#]*)/

    const fallbackMatch = fallbackRegex.exec(url)

    if (fallbackMatch && fallbackMatch[1]) {
      return fallbackMatch[1]
    }

    return null
  }

  const getVideoId = () => {
    const videoIdFromUrl = getVideoFromUrl(videoParameter)
    return videoIdFromUrl ? videoIdFromUrl : videoParameter
  }

  const videoId = getVideoId()

  return (
    <div style={videoDiv}>
      <iframe
        style={videoPlayer}
        title='Youtube Video'
        width='560'
        height='315'
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      />
    </div>
  )
}

export default YoutubePiP
