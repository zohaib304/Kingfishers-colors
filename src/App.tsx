import "./App.css"
import { useState } from "react"

import { MobileFrame } from "@/components/mobile-frame"
import { IntroDialogue } from "@/components/intro-dialogue"
import { Game } from "@/components/game"
import { OutroDialogue } from "@/components/outro-dialogue"

type GameState = "intro" | "game" | "outro" | "complete"

function App() {
  const [gameState, setGameState] = useState<GameState>("intro")

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
        <div className="h-full w-full flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold text-gray-900">Thank you for playing!</h1>
        </div>
      )}
    </MobileFrame>
  )
}

export default App
