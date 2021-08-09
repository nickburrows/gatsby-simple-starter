import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

export default function ThemeToggle() {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => {
        if (theme == null) return null
        return (
          <label className="cursor-pointer group-hover:bg-gray-500">
            <input
              className="hidden"
              type="checkbox"
              onChange={e => toggleTheme(e.target.checked ? "dark" : "light")}
              checked={theme === "dark"}
            />
            {theme === "dark" ? (
              <div className="transition duration-500 ease-in origin-center transform scale-90 -rotate-180">
                <svg
                  className="w-6 h-6 text-yellow-400 fill-current stroke-current stroke-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <mask id="mymask1">
                    <rect x="0" y="0" width="100%" height="100%" fill="white" />
                  </mask>
                  <circle cx="12" cy="12" r="5" mask="url(#mymask1)" />
                  <g stroke="currentColor">
                    <line x1="12" y1="1" x2="12" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="23" />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                    <line x1="1" y1="12" x2="3" y2="12" />
                    <line x1="21" y1="12" x2="23" y2="12" />
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                  </g>
                </svg>
              </div>
            ) : (
              <div className="transition duration-500 ease-out origin-center transform scale-100 -rotate-90">
                <svg
                  className="w-6 h-6 stroke-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  transform="rotate(40)"
                  viewBox="0 0 24 24"
                >
                  <mask id="mymask2">
                    <rect x="0" y="0" width="100%" height="100%" fill="white" />
                    <circle cx="12" cy="4" r="9" fill="black" />
                  </mask>
                  <circle
                    fill="#9CA3AF"
                    cx="12"
                    cy="12"
                    r="9"
                    mask="url(#mymask2)"
                  />
                </svg>
              </div>
            )}
          </label>
        )
      }}
    </ThemeToggler>
  )
}
