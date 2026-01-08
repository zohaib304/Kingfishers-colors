import "./intro-dialogue.css"
import { useState } from "react"
import miloDefault from "../assets/milo_default.svg"
import miloSad from "../assets/milo_sad.svg"
import frowinHappy from "../assets/frowin_happy.svg"
import frowinSurprised from "../assets/frowin_surprised.svg"
import frowinSad from "../assets/frowin_sad.svg"
import elaDefault from "../assets/ela_default.svg"
import elaHappy from "../assets/ela_happy.svg"
import elaSad from "../assets/ela_sad.svg"

const dialogueLines = [
  {
    character: "Milo",
    text: "Warum brauchen wir denn die Feder des Eisvogels?",
    picture: miloDefault,
  },
  {
    character: "Frowin",
    text: "Der Eisvogel ist einer der schönsten Anblicke hier. Der Fliegende Edelstein steht für die Schönheit unserer Natur. Daher brauchen wir auch etwas von ihm in unserem Nest!",
    picture: frowinHappy,
  },
  {
    character: "Ela",
    text: "Aber dieser hier ist nur schwarz-weiß.",
    picture: elaDefault,
  },
  {
    character: "Frowin",
    text: "Ja, in der Tat. Dieser hier ist...",
    picture: frowinHappy,
  },
  {
    character: "Frowin",
    text: "...SCHWARZ-WEIB?",
    picture: frowinSurprised,
  },
  {
    character: "Milo",
    text: "Hier scheint etwas nicht zu stimmen.",
    picture: miloSad,
  },
  {
    character: "Ela",
    text: "Vielleicht wird er bunt, wenn wir ihn erschrecken. Buh!",
    picture: elaHappy,
  },
  {
    character: "Frowin",
    text: "Nein, Ela. Gundomar hat die strahlenden Farben vom Fliegenden Edelstein geklaut, um seinen Schatz zu vergrößern.",
    picture: frowinSad,
  },
  {
    character: "Ela",
    text: "Der Arme.",
    picture: elaSad,
  },
  {
    character: "Milo",
    text: "So kommen wir nicht an eine Feder für den Trank.",
    picture: miloSad,
  },
  {
    character: "Milo",
    text: "Wartet mal. Ela, du hast doch deinen Malkasten dabei.",
    picture: miloDefault,
  },
  {
    character: "Ela",
    text: "Dabei and einsatzbereit!",
    picture: elaHappy,
  },
  {
    character: "Frowin",
    text: "Das ist die Idee, Milo! Wir können dem Vogel seine Farbe zurückgeben. Wenn ich bloß noch wüsste, wie er genau aussah...",
    picture: frowinHappy,
  },
  {
    character: "Milo",
    text: "Keine Sorge. Wir schaffen das schon.",
    picture: miloDefault,
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

export function IntroDialogue({ onComplete }) {
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
      <div
        className="intro-complete-container"
        onClick={onComplete}
      >
        <h1 className="intro-complete-title">You in game</h1>
        <p className="intro-complete-hint">Tap to continue</p>
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
        style={{ alignSelf: dialogue.character === "Ela" ? "flex-start" : "flex-end" }}
      >
        <img src={dialogue.picture} alt={dialogue.character} />
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
