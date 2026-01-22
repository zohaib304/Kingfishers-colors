import "./game.css"
import { useState, useEffect } from "react"
import birdColoredSvg from "../assets/bird-colored.svg"
import rewardFeatherSvg from "../assets/reward.svg"
import ColorableBird from "./colorable-bird"

const COLORS = [
  "#5975C0", "#5C5A5B", "#7DB4CB", "#8FA052", "#9B6344",
  "#C39370", "#D05A43", "#F2BC7E", "#FAF1D6"
]

const TOTAL_PATHS = 19

export function Game({ onFinish }) {
  const [showHint, setShowHint] = useState(false)
  const [selectedColor, setSelectedColor] = useState("#5975C0")
  const [filledPaths, setFilledPaths] = useState({})
  const [error, setError] = useState("")
  const [showReward, setShowReward] = useState(false)

  // Show reward when all paths are filled
  useEffect(() => {
    const filledCount = Object.keys(filledPaths).length
    if (filledCount === TOTAL_PATHS && !showReward) {
      setShowReward(true)
    }
  }, [filledPaths, showReward])

  // Auto-dismiss error after 3 seconds with fade out
  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError("")
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [error, setError])

  // Handle collect feather - go to outro
  const handleCollectFeather = () => {
    onFinish()
  }

  console.log(error)

  return (
    <div className="game-container">
      {/* Error Message */}
      {error && (
        <div className="error-message">
          {error}
        </div>
      )}

      <div className="hint-container">
        <button className="hint-button" onClick={() => setShowHint(true)}>?</button>
      </div>

      <ColorableBird 
        selectedColor={selectedColor}
        filledPaths={filledPaths}
        setFilledPaths={setFilledPaths}
        error={error}
        setError={setError}
      />

      <div className="color-palette">
        {COLORS.map(color => (
          <button
            className="color-swatch"
            key={color}
            onClick={() => setSelectedColor(color)}
            style={{
              background: color,
              border: selectedColor === color ? "2px solid black" : "none",
            }}
          />
        ))}
      </div>

      {/* Hint Modal */}
      {showHint && (
        <div className="hint-modal-overlay" onClick={() => setShowHint(false)}>
          <div className="hint-modal" onClick={(e) => e.stopPropagation()}>
            <div className="hint-modal-header">
              <h3>Hint: Correct Colors</h3>
              <button className="hint-close-button" onClick={() => setShowHint(false)}>✕</button>
            </div>
            <div className="hint-image">
              <img src={birdColoredSvg} alt="Correctly colored kingfisher" />
            </div>
          </div>
        </div>
      )}

      {/* Reward Modal */}
      {showReward && (
        <div className="reward-modal-overlay">
          <div className="reward-modal">
            <h2>Congratulations! 🎉</h2>
            <p>You&apos;ve successfully colored the kingfisher!</p>
            <div className="reward-feather">
              <img src={rewardFeatherSvg} alt="Kingfisher feather reward" />
            </div>
            <button type="button" className="collect-button" onClick={handleCollectFeather}>
              Collect Feather
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
