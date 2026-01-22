import "./outro-dialogue.css"
import { useState } from "react"
import miloDefault from "../assets/milo_default.svg"
import frowinHappy from "../assets/frowin_happy.svg"
import elaDefault from "../assets/ela_default.svg"
import rewardFeatherSvg from "../assets/reward.svg"

// Note: Using available assets - milo_default for Milo_Happy, ela_default for Ela_Happy
const dialogueLines = [
  {
    character: "Milo",
    text: "Endlich! Der Eisvogel erstrahlt wieder im alten Glanz.",
    picture: miloDefault,
    height: 250,
    width: 250,
    top: 80,
    right: -50,
  },
  {
    character: "Ela",
    text: "Schaut mal, er hat etwas für uns.",
    picture: elaDefault,
    height: 250,
    width: 250,
    top: 90,
    right: -60,
  },
  {
    character: "Frowin",
    text: "Die Feder. Wir haben ihm geholfen, und jetzt hilft er uns, Gundomar aufzuhalten.",
    picture: frowinHappy,
    height: 200,
    width: 200,
    top: 70,
    right: -70,
  },
]

const getCharacterColor = (character) => {
  const colors = {
    Milo: "#1656FD50",
    Frowin: "#9FDA9480",
    Ela: "#94F8C980",
  }
  return colors[character] || "#1656FD50"
}

const getCharacterNameColor = (character) => {
  const colors = {
    Milo: "#1656FD80",
    Ela: "#8FDED080",
    Frowin: "#7BA97380",
  }
  return colors[character] || "#1656FD80"
}

export function OutroDialogue({ onComplete }) {
  const [currentLine, setCurrentLine] = useState(0)
  const isComplete = currentLine >= dialogueLines.length

  const handleScreenTap = () => {
    if (isComplete) {
      onComplete?.()
    } else if (currentLine < dialogueLines.length - 1) {
      setCurrentLine(currentLine + 1)
    } else {
      setCurrentLine(currentLine + 1)
    }
  }

  if (isComplete) {
    return (
      <div className="intro-complete-container">
        <h1 className="intro-complete-title">Game Complete!</h1>
        <p className="intro-complete-hint">You received the kingfisher feather</p>
        <div className="complete-feather">
          <img src={rewardFeatherSvg} alt="Kingfisher feather" />
        </div>
        <button className="continue-button" onClick={() => onComplete?.()}>
          Continue
        </button>
      </div>
    )
  }

  const dialogue = dialogueLines[currentLine]
  const progress = ((currentLine + 1) / dialogueLines.length) * 100

  return (
    <div
      className="intro-dialogue-container"
      onClick={handleScreenTap}
    >
      <div
        className="character-image-right"
        style={{ 
          left: dialogue.character === "Ela" ? "-60px" : "", 
          top: dialogue.character === "Ela" ? "90px" : "", 
          top: dialogue.top ? dialogue.top + "px" : "", 
          right: dialogue.right ? dialogue.right + "px" : "" 
        }}
      >
        <img src={dialogue.picture} alt={dialogue.character} width={dialogue.width} height={dialogue.height} />
      </div>
      <div 
        className="character-name-box"
        style={{ 
          backgroundColor: getCharacterNameColor(dialogue.character),
          alignSelf: dialogue.character === "Ela" ? "flex-end" : "flex-start"
        }}
      >
          {dialogue.character}
      </div>
      {/* Dialogue Box with Character Image */}
      <div 
        className="intro-dialogue-box"
        style={{ backgroundColor: getCharacterColor(dialogue.character) }}
      >
        <p className="dialogue-text">
          {dialogue.text}
        </p>
      </div>

      {/* Progress Bar */}
      <div className="progress-bar-container">
        <div
          className="progress-bar-fill"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  )
}
