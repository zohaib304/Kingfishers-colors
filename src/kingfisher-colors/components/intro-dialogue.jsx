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
    height: 250,
    width: 250,
    top: 80,
    right: -50,
  },
  {
    character: "Frowin",
    text: "Der Eisvogel ist einer der schönsten Anblicke hier. Der Fliegende Edelstein steht für die Schönheit unserer Natur. Daher brauchen wir auch etwas von ihm in unserem Nest!",
    picture: frowinHappy,
    height: 200,
    width: 200,
    top: 70,
    right: -70,
  },
  {
    character: "Ela",
    text: "Aber dieser hier ist nur schwarz-weiß.",
    picture: elaDefault,
    height: 250,
    width: 250,
    top: 90,
    right: -60,
  },
  {
    character: "Frowin",
    text: "Ja, in der Tat. Dieser hier ist...",
    picture: frowinHappy,
    height: 200,
    width: 200,
    top: 70,
    right: -70,
  },
  {
    character: "Frowin",
    text: "...SCHWARZ-WEIB?",
    picture: frowinSurprised,
    height: 200,
    width: 200,
    top: 70,
    right: -70,
  },
  {
    character: "Milo",
    text: "Hier scheint etwas nicht zu stimmen.",
    picture: miloSad,
    height: 250,
    width: 250,
    top: 85,
    right: -60,
  },
  {
    character: "Ela",
    text: "Vielleicht wird er bunt, wenn wir ihn erschrecken. Buh!",
    picture: elaHappy,
    height: 250,
    width: 250,
    top: 90,
    right: -60,
  },
  {
    character: "Frowin",
    text: "Nein, Ela. Gundomar hat die strahlenden Farben vom Fliegenden Edelstein geklaut, um seinen Schatz zu vergrößern.",
    picture: frowinSad,
    height: 200,
    width: 200,
    top: 70,
    right: -80,
  },
  {
    character: "Ela",
    text: "Der Arme.",
    picture: elaSad,
    height: 220,
    width: 230,
    top: 80,
    right: -60,
  },
  {
    character: "Milo",
    text: "So kommen wir nicht an eine Feder für den Trank.",
    picture: miloSad,
    height: 270,
    width: 270,
    top: 85,
    right: -60,
  },
  {
    character: "Milo",
    text: "Wartet mal. Ela, du hast doch deinen Malkasten dabei.",
    picture: miloDefault,
    height: 250,
    width: 250,
     top: 80,
    right: -50,
  },
  {
    character: "Ela",
    text: "Dabei and einsatzbereit!",
    picture: elaHappy,
    height: 250,
    width: 250,
    top: 95,
    right: -60,
  },
  {
    character: "Frowin",
    text: "Das ist die Idee, Milo! Wir können dem Vogel seine Farbe zurückgeben. Wenn ich bloß noch wüsste, wie er genau aussah...",
    picture: frowinHappy,
    height: 200,
    width: 200,
    top: 70,
    right: -70,
  },
  {
    character: "Milo",
    text: "Keine Sorge. Wir schaffen das schon.",
    picture: miloDefault,
    height: 250,
    width: 250,
    top: 80,
    right: -50,
  },
]

const getCharacterColor = (character) => {
  const colors = {
    Milo: "#1656FD50",
    Frowin: "#9fda94c2",
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

  const handleScreenTap = () => {
    if (currentLine < dialogueLines.length - 1) {
      setCurrentLine(currentLine + 1)
    } else {
      onComplete?.()
    }
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
                style={{ left: dialogue.character === "Ela" ? "-60px" : "", top: dialogue.character === "Ela" ? "90px" : "", top: dialogue.top ? dialogue.top + "px" : "", right: dialogue.right ? dialogue.right + "px" : "" }}

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
