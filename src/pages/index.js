import React, { useState } from "react"
import { DarkModeSwitch } from "react-toggle-dark-mode"

import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/Layout"
import Seo from "../components/seo"
import AnimatedIcon from "../components/AnimatedIcon"

const IndexPage = () => {
  const [isDarkMode, setDarkMode] = useState(false)

  const toggleDarkMode = checked => {
    setDarkMode(checked)
  }

  return (
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
  )
}
export default IndexPage
