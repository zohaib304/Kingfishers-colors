import "./App.css"

import { MobileFrame } from "@/components/mobile-frame"
import { Button } from "./components/ui/button"

function App() {
  return (
    <MobileFrame>
      <div className="p-4 flex flex-col items-center justify-between h-full">
        <h1 className="mb-4 text-2xl font-bold">Kingfisher</h1>
        <Button variant={"outline"}>Start Game</Button>
      </div>
    </MobileFrame>
  )
}

export default App
