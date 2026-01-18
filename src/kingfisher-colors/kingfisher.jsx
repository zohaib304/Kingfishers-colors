import { useState } from "react"

import { MobileFrame } from "./components/mobile-frame"
import { IntroDialogue } from "./components/intro-dialogue"
import { Game } from "./components/game"
import { OutroDialogue } from "./components/outro-dialogue"

// Game states: "intro" -> "game" -> "outro" -> back to "intro"
export default function Kingfisher() {
  const [gameState, setGameState] = useState("intro")

  const goToGame = () => setGameState("game")
  const goToOutro = () => setGameState("outro")
  const restartGame = () => setGameState("intro")

  return (
    <MobileFrame>
      {gameState === "intro" && (
        <IntroDialogue onComplete={goToGame} />
      )}
      {gameState === "game" && (
        <Game onFinish={goToOutro} />
      )}
      {gameState === "outro" && (
        <OutroDialogue onComplete={restartGame} />
      )}
    </MobileFrame>
  )
}
