import { useLocation } from "@reach/router"
import React, { useState, useEffect } from "react"

const LoadingSpinner = () => (
  <div className="loadingio-eclipse">
    <div className="ldio-rpinwye8j0b">
      <div></div>
    </div>
  </div>
)

const YoutubePiP = () => {
  const location = useLocation()

  const [isLoading, setIsLoading] = useState(true)
  // const [videoShow, setVideoShow] = useState(false)

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

  useEffect(() => {
    const loadingVideo = setTimeout(() => setIsLoading(false), 3000)
    return () => clearTimeout(loadingVideo)
  })

  console.log(videoParameter)

  return (
    <div className="text-center text-base mx-auto pt-4 dark:bg-gray-800 dark:text-white min-h-screen">
      {videoParameter != null && (
        <>
          {isLoading && (
            <div className="loading-spinner">
              <LoadingSpinner />
            </div>
          )}
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
        </>
      )}
    </div>
  )
}

export default YoutubePiP
