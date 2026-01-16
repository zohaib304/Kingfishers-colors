import "./game.css"
import { useState } from "react"
import birdSvg from "../assets/bird.svg"
import birdColoredSvg from "../assets/bird-colored.svg"

export function Game({ onFinish }) {
  const [selectedColor, setSelectedColor] = useState(null)
  const [showHint, setShowHint] = useState(false)

  const colors = [
    { name: "blue", value: "#0EA5E9" },
    { name: "white", value: "#FFFFFF" },
    { name: "orange", value: "#F97316" },
    { name: "black", value: "#000000" },
    { name: "brown", value: "#92400E" },
    { name: "green", value: "#22C55E" },
    { name: "pink", value: "#EC4899" },
    { name: "purple", value: "#A855F7" },
    { name: "red", value: "#EF4444" },
    { name: "yellow", value: "#EAB308" },
  ]

  const handleColorSelect = (color) => {
    setSelectedColor(color)
  }

  return (
    <div className="game-container">
      <div className="hint-container">
        <button className="hint-button" onClick={() => setShowHint(true)}>
          ?
        </button>
      </div>
      {/* Kingfisher SVG */}
      <div className="kingfisher-image">
        <img src={birdSvg} alt="Kingfisher to color" />
      </div>
      {/* Color Palette */}
      <div className="color-palette">
        {colors.map((color) => (
          <button
            key={color.name}
            className={`color-swatch ${
              selectedColor?.name === color.name ? "selected" : ""
            }`}
            style={{ backgroundColor: color.value }}
            onClick={() => handleColorSelect(color)}
            aria-label={color.name}
          />
        ))}
      </div>

      {/* Test button */}
      <button className="finish-button" onClick={onFinish}>
        Finish (Test)
      </button>

      {/* Hint Modal */}
      {showHint && (
        <div className="hint-modal-overlay" onClick={() => setShowHint(false)}>
          <div className="hint-modal" onClick={(e) => e.stopPropagation()}>
            <div className="hint-modal-header">
              <h3>Hint: Correct Colors</h3>
              <button className="hint-close-button" onClick={() => setShowHint(false)}>
                ✕
              </button>
            </div>
            <div className="hint-image">
              <img src={birdColoredSvg} alt="Correctly colored kingfisher" />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
