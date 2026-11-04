import type { JSX } from "react/jsx-runtime"


// List of shortcuts to display
const shortcutList: {keyCombo: string, action: string}[] = [
  {
    keyCombo: "Ctrl+Shift+1",
    action: "Activate pen"
  },
  {
    keyCombo: "Ctrl+Shift+2",
    action: "Activate eraser"
  },
  {
    keyCombo: "Ctrl+Shift+3",
    action: "Activate text box"
  },
  {
    keyCombo: "Ctrl+Shift+4",
    action: "Activate pointer"
  },
  {
    keyCombo: "Ctrl+Shift+5",
    action: "Activate highlighter"
  }
]

/**
 * Displays list of shortcuts available for switching between whiteboard tools
 * 
 * @returns JSX element for shortcut list
 */
function ToolShortcutList(): JSX.Element {
  return (
    <>
      <div className="shortcut-list-section">
        <div>Switch Tools:</div>
        <ul className="shortcut-list">
          {shortcutList.map((shortcut, index): JSX.Element => {
            return <li key={index} style={{paddingBottom: 4}}><b>{shortcut.keyCombo}:</b> {shortcut.action}</li>
          })}
        </ul>
      </div>
    </>
  )
}

export default ToolShortcutList
