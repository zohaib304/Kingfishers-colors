import "./game.css"
import { useState, useEffect } from "react"
import birdColoredSvg from "../assets/bird-colored.svg"
import rewardFeatherSvg from "../assets/reward.svg"
import ColorableBird from "./colorable-bird"

const COLORS = [
    "#5975C0",
    "#5C5A5B",
    "#7DB4CB",
    "#8FA052",
    "#9B6344",
    "#C39370",
    "#D05A43",
    "#F6CF99",
    "#FAF1D6"
]

export function Game({ onFinish }) {
  const [showHint, setShowHint] = useState(false)
  const [selectedColor, setSelectedColor] = useState("#5975C0");
  const [filledPaths, setFilledPaths] = useState({});
  const [error, setError] = useState("");
  const [showReward, setShowReward] = useState(false);
  const [featherCollected, setFeatherCollected] = useState(false);

  // Check if all paths are correctly filled
  useEffect(() => {
    const totalPaths = 19; // Total number of bird parts
    const filledCount = Object.keys(filledPaths).length;
    
    if (filledCount === totalPaths && !showReward && !featherCollected) {
      setShowReward(true);
    }
  }, [filledPaths, showReward, featherCollected]);

  return (
    <div className="game-container">
      <div className="hint-container">
        <button className="hint-button" onClick={() => setShowHint(true)}>
          ?
        </button>
      </div>

      <ColorableBird 
        selectedColor={selectedColor}
        filledPaths={filledPaths}
        setFilledPaths={setFilledPaths}
        error={error}
        setError={setError}
      />

      <div style={{ marginBottom: 12 }} className="color-palette">
        {COLORS.map(color => (
          <button
            className="color-swatch"
            key={color}
            onClick={() => setSelectedColor(color)}
            style={{
              background: color,
              color: "white",
              marginRight: 8,
              border: selectedColor === color ? "2px solid black" : "none",
            }}
          >
          </button>
        ))}
      </div>

      {featherCollected && (
        <button className="continue-button" onClick={() => {
          console.log("Continue button clicked, calling onFinish");
          onFinish();
        }}>
          Continue
        </button>
      )}

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

      {showReward && (
        <div className="reward-modal-overlay">
          <div className="reward-modal" onClick={() => {
            setFeatherCollected(true);
            setShowReward(false);
          }}>
            <h2>Congratulations! 🎉</h2>
            <p>You've successfully colored the kingfisher!</p>
            <div className="reward-feather">
              <img src={rewardFeatherSvg} alt="Kingfisher feather reward" />
            </div>
            <p className="collect-text">Click the feather to collect it!</p>
          </div>
        </div>
      )}
    </div>
  )
}
