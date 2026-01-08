import "./game.css"

export function Game({ onFinish }) {
  return (
    <div className="game-container">
      <h1 className="game-title">
        Kingfisher Coloring Game
      </h1>
      <p className="game-description">
        Game content will be implemented here
      </p>
      <button onClick={onFinish}>
        Finish
      </button>
    </div>
  )
}
