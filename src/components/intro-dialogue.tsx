import { useState } from "react"
import miloDefault from "@/assets/milo_default 1.svg"
import frowinHappy from "@/assets/frowin_happy.svg"
import frowinSurprised from "@/assets/frowin_surprised.svg"
import elaDefault from "@/assets/ela_default 1.svg"

interface DialogueLine {
  character: string
  text: string
  picture: string
}

const dialogueLines: DialogueLine[] = [
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
]

interface IntroDialogueProps {
  onComplete?: () => void
}

export function IntroDialogue({ onComplete }: IntroDialogueProps) {
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
        className="h-full w-full flex flex-col items-center justify-center cursor-pointer"
        onClick={onComplete}
      >
        <h1 className="text-3xl font-bold text-gray-900">You in game</h1>
        <p className="text-sm text-gray-500 mt-4">Tap to continue</p>
      </div>
    )
  }

  const dialogue = dialogueLines[currentLine]
  const progress = ((currentLine + 1) / dialogueLines.length) * 100
  const isEla = dialogue.character === "Ela"

  return (
    <div
      className="h-full w-full flex flex-col justify-end p-6 cursor-pointer"
      onClick={handleScreenTap}
    >
      {/* Dialogue Box with Character Image */}
      <div className="relative bg-[#9FDA94] p-4 mb-4 border-3 border-black">
        {/* Character Image positioned at top right or left depending on character */}
        <div className={`absolute -top-65 ${isEla ? "-left-10" : "-right-20"}`}>
          <img
            src={dialogue.picture}
            alt={dialogue.character}
            className="w-75 h-75 object-contain"
          />
        </div>
        
        <p className="text-sm font-semibold text-gray-700 mb-2">
          {dialogue.character}
        </p>
        <p className="text-sm leading-relaxed text-gray-900">
          {dialogue.text}
        </p>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 h-4 overflow-hidden">
        <div
          className="bg-[#FF7700] h-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  )
}
