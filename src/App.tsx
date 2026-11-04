import type { JSX } from "react/jsx-runtime"
import ToolShortcutList from "./ToolShortcutList"
import ColorShortcutList from "./ColorShortcutList"


/**
 * Main App component
 * 
 * @returns JSX element for App component
 */
function App(): JSX.Element {
  return (
    <>
      <div style={{minWidth: 360, padding: 16, textAlign: "center"}}>
        <h1 style={{marginTop: 0, marginBottom: 0}}>Buff LEO</h1>
        <h2 style={{marginTop: 0, marginBottom: 0}}>💪🦁</h2>
      </div>
      <hr style={{marginBottom: 16}} />
      <ToolShortcutList />
      <ColorShortcutList />
    </>
  )
}

export default App
