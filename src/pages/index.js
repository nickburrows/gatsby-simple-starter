// import { useLocation } from "@reach/router"
import React, { useState } from "react"
import { DarkModeSwitch } from "react-toggle-dark-mode"

import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import {videoWrapper} from '../utils/videoWrapper'

import Layout from "../components/Layout"
import Seo from "../components/seo"
import AnimatedIcon from "../components/AnimatedIcon"

const IndexPage = ({location}) => {
  // const location = useLocation()

  const [isDarkMode, setDarkMode] = useState(false)

  const toggleDarkMode = checked => {
    setDarkMode(checked)
  }

  const urlQuery = new URLSearchParams(location.search).get("yt")

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
    const videoIdFromUrl = getVideoFromUrl(urlQuery)
    return videoIdFromUrl ? videoIdFromUrl : urlQuery
  }

  const videoId = getVideoId()

  

  return (
    <>
      {urlQuery ? (
        videoWrapper({videoId: `${videoId}`})
      ) : (
        <Layout>
          <Seo title="Home" />
          <h1>Hi people</h1>
          <div className="custom-datk-mode-toggle my-4">
            <div className="text-base">自定義SVG Icon + 動畫</div>
            <AnimatedIcon />
          </div>
          <div>
            <div className="text-xl">Dark Mode Switch</div>
            <DarkModeSwitch
              style={{ marginBottom: "2rem" }}
              checked={isDarkMode}
              onChange={toggleDarkMode}
              size={50}
            />
          </div>
          <p>Welcome to your new Gatsby site.</p>
          <p>Now go build something great.</p>
          <StaticImage
            src="../images/gatsby-astronaut.png"
            width={300}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="A Gatsby astronaut"
            style={{ marginBottom: `1.45rem` }}
          />
          <p>
            <Link to="/page-2/">Go to page 2</Link> <br />
            <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
          </p>
        </Layout>
      )}
    </>
  )
}
export default IndexPage
