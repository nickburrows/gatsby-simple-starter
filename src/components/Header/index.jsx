import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import ThemeToggle from "../ThemeToggle" // 👈

const Header = ({ siteTitle }) => (
  <header className="mb-6 bg-gray-800">
    <div className=" bg-blue-500 bg-opacity-20 dark:bg-gray-200 dark:bg-opacity-0">
      <div className="my-auto mx-auto max-w-4xl py-6 px-4 flex items-center justify-between">
        <div className="flex-shrink-0 flex items-center">
          <Link className="font-extrabold text-4xl" to="/">
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-blue-300 to-purple-400">
              {siteTitle}
            </span>
          </Link>
        </div>
        <div className="hidden sm:block sm:ml-6">
          <div className="flex items-center justify-center space-x-4">
            <div className="rounded-md bg-gray-200 dark:bg-gray-600 p-1 text-base font-semibold text-gray-400 hover:text-gray-700">
              <ThemeToggle />
            </div>
            <Link
              to="/"
              className="text-base font-semibold text-gray-400 hover:underline hover:text-gray-700"
            >
              Blog
            </Link>
            <Link to="/" className="text-base font-semibold text-gray-400">
              Talk
            </Link>
          </div>
        </div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
