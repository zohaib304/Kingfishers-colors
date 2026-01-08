import { MqttProvider, connectAsync } from "@artcom/mqtt-topping-react"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import App from "./_App.jsx"
import "./index.css"

const mqttClient = await connectAsync("ws://localhost:8000/mqtt")

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MqttProvider mqttClient={mqttClient}>
      <App />
    </MqttProvider>
  </StrictMode>,
)
