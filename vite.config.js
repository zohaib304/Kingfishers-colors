import eslintPlugin from "@nabla/vite-plugin-eslint"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  build: { sourcemap: true },
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),
    eslintPlugin(),
  ],
  // resolve: { alias: { mqtt: "mqtt/dist/mqtt.js" } },
})
