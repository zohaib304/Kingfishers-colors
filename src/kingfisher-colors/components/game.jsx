import "./game.css"
import { useState, useRef, useEffect } from "react"

export function Game({ onFinish }) {
  const [selectedColor, setSelectedColor] = useState(null)
  const [isPainting, setIsPainting] = useState(false)
  const canvasRef = useRef(null)
  const contextRef = useRef(null)

  const colors = [
    { name: "blue", value: "#0EA5E9" },
    { name: "white", value: "#FFFFFF" },
    { name: "orange", value: "#F97316" },
    { name: "black", value: "#000000" },
    { name: "brown", value: "#92400E" },
    { name: "green", value: "#22C55E" },
    { name: "pink", value: "#EC4899" },
    { name: "purple", value: "#A855F7" },
    { name: "red", value: "#EF4444" },
    { name: "yellow", value: "#EAB308" },
  ]

  useEffect(() => {
    const canvas = canvasRef.current
    canvas.width = 400
    canvas.height = 400
    
    const context = canvas.getContext("2d")
    context.lineCap = "round"
    context.lineJoin = "round"
    context.lineWidth = 20
    
    // Draw kingfisher outline placeholder
    context.strokeStyle = "#000000"
    context.lineWidth = 3
    context.strokeRect(50, 50, 300, 300)
    context.font = "24px Arial"
    context.fillStyle = "#666"
    context.textAlign = "center"
    context.fillText("Kingfisher", 200, 210)
    
    context.lineWidth = 20
    contextRef.current = context
  }, [])

  const handleColorSelect = (color) => {
    setSelectedColor(color)
  }

  const startPainting = (e) => {
    if (!selectedColor) return
    
    const { offsetX, offsetY } = getCoordinates(e)
    contextRef.current.strokeStyle = selectedColor.value
    contextRef.current.beginPath()
    contextRef.current.moveTo(offsetX, offsetY)
    setIsPainting(true)
  }

  const paint = (e) => {
    if (!isPainting || !selectedColor) return
    
    const { offsetX, offsetY } = getCoordinates(e)
    contextRef.current.lineTo(offsetX, offsetY)
    contextRef.current.stroke()
  }

  const stopPainting = () => {
    if (isPainting) {
      contextRef.current.closePath()
      setIsPainting(false)
    }
  }

  const getCoordinates = (e) => {
    const canvas = canvasRef.current
    const rect = canvas.getBoundingClientRect()
    
    if (e.touches && e.touches[0]) {
      return {
        offsetX: e.touches[0].clientX - rect.left,
        offsetY: e.touches[0].clientY - rect.top,
      }
    }
    
    return {
      offsetX: e.nativeEvent.offsetX,
      offsetY: e.nativeEvent.offsetY,
    }
  }

  return (
    <div className="game-container">
      {/* Canvas for painting */}
      <canvas
        ref={canvasRef}
        className="kingfisher-canvas"
        onMouseDown={startPainting}
        onMouseMove={paint}
        onMouseUp={stopPainting}
        onMouseLeave={stopPainting}
        onTouchStart={startPainting}
        onTouchMove={paint}
        onTouchEnd={stopPainting}
      />

      {/* Color Palette */}
      <div className="color-palette">
        {colors.map((color) => (
          <button
            key={color.name}
            className={`color-swatch ${
              selectedColor?.name === color.name ? "selected" : ""
            }`}
            style={{ backgroundColor: color.value }}
            onClick={() => handleColorSelect(color)}
            aria-label={color.name}
          />
        ))}
      </div>

      {/* Test button */}
      <button className="finish-button" onClick={onFinish}>
        Finish (Test)
      </button>
    </div>
  )
}
