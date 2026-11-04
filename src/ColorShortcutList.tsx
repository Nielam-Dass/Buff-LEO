import type { JSX } from "react/jsx-runtime"


// List of shortcuts to display
const shortcutList: {shortcutKey: string, colorName: string, colorRGBCode: string}[] = [
  {
    shortcutKey: "K",
    colorName: "Black",
    colorRGBCode: "rgb(0, 0, 0)"
  },
  {
    shortcutKey: "R",
    colorName: "Red",
    colorRGBCode: "rgb(255, 0, 0)"
  },
  {
    shortcutKey: "G",
    colorName: "Green",
    colorRGBCode: "rgb(0, 255, 0)"
  },
  {
    shortcutKey: "B",
    colorName: "Blue",
    colorRGBCode: "rgb(0, 0, 255)"
  },
  {
    shortcutKey: "Y",
    colorName: "Yellow",
    colorRGBCode: "rgb(255, 255, 0)"
  }
]

/**
 * Displays list of shortcuts to switch between colors for pen and highlighter tools
 * 
 * @returns JSX Element for shortcut list
 */
function ColorShortcutList(): JSX.Element {
  return (
    <>
      <div className="shortcut-list-section">
        <div>Switch Colors (Pen/Highlighter):</div>
        <ul className="shortcut-list">
          {shortcutList.map((shortcut, index) => {
            return <li key={index}><b>{shortcut.shortcutKey}:</b> <span style={{color: shortcut.colorRGBCode}}>⬤</span> {shortcut.colorName}</li>
          })}
        </ul>
      </div>
    </>
  )
}

export default ColorShortcutList
