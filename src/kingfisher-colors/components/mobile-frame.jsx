import "./mobile-frame.css"

import backgroundImage from "../assets/new_background.png"

export function MobileFrame({ children }) {
  return (

    <div
      className="mobile-frame"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="mobile-frame-content">
        {children}
      </div>
    </div>

  )
}
