import { Button } from "./ui/button"

interface GameProps {
  onFinish?: () => void
}

export function Game({ onFinish }: GameProps) {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        Kingfisher Coloring Game
      </h1>
      <p className="text-center text-gray-700 mb-8">
        Game content will be implemented here
      </p>
      <Button onClick={onFinish} size="lg">
        Finish
      </Button>
    </div>
  )
}
