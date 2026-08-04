import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
  build: {
    rolldownOptions: {
      input: {
        index: "index.html",
        contentScript: "src/utils/contentScript.ts"
      },
      output: {
        entryFileNames: "assets/[name].js"
      }
    }
  }
})
