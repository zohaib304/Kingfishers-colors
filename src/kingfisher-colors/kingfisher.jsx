// import /App.css"
import { useState } from "react"

import { MobileFrame } from "./components/mobile-frame"
import { IntroDialogue } from "./components/intro-dialogue"
import { Game } from "./components/game"
import { OutroDialogue } from "./components/outro-dialogue"


export default function Kingfisher() {
  const [gameState, setGameState] = useState("intro")

  return (
    <MobileFrame>
      {gameState === "intro" && (
        <IntroDialogue onComplete={() => setGameState("game")} />
      )}
      {gameState === "game" && (
        <Game onFinish={() => setGameState("outro")} />
      )}
      {gameState === "outro" && (
        <OutroDialogue onComplete={() => setGameState("complete")} />
      )}
      {gameState === "complete" && (
        <div className="complete-container">
          <h1 className="complete-title">Thank you for playing!</h1>
        </div>
      )}
    </MobileFrame>
  )
}
