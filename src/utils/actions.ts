/**
 * Clicks on the pen tool button
 */
export const activatePen = (): void => {
  const penBtn: HTMLElement | null = acquireToolBtn("Pen")
  penBtn?.click()
}

/**
 * Clicks on the eraser tool button
 */
export const activateEraser = (): void => {
  const eraserBtn: HTMLElement | null = acquireToolBtn("Eraser")
  eraserBtn?.click()
}

/**
 * Clicks on the text box tool button
 */
export const activateTextBox = (): void => {
  const textBoxBtn: HTMLElement | null = acquireToolBtn("Text")
  textBoxBtn?.click()
}

/**
 * Clicks on the pointer tool button
 */
export const activatePointer = (): void => {
  const pointerBtn: HTMLElement | null = acquireToolBtn("Pointer")
  pointerBtn?.click()
}

/**
 * Clicks on the highlighter tool button
 */
export const activateHighlighter = (): void => {
  const highlighterBtn: HTMLElement | null = acquireToolBtn("Highlighter")
  highlighterBtn?.click()
}

type toolColors = "black" | "red" | "green" | "blue" | "yellow"
/**
 * Changes the color for the pen or highlighter tool depending on which one is active
 * 
 * @param toolColor String to identify the color to switch to
 */
export const switchCurrentToolColor = (toolColor: toolColors): void => {
  // Find currently active tool
  const currentTool: string | null = document.querySelector("#toolConfigurationContainer > ul a.style_Background_Selection_background")?.getAttribute("title") ?? null
  if (!currentTool || (currentTool !== "Pen" && currentTool !== "Highlighter")) return
  // Simulate hover over tool button to reveal color configuration menu
  const toolElement: HTMLElement | null = acquireToolBtn(currentTool)?.parentElement ?? null
  toolElement?.dispatchEvent(new MouseEvent("mouseenter"))
  const toolConfig: HTMLElement | null = document.querySelector("#toolConfigurationContainer > ul > li > ul.configuration-data")
  // Find the target color button and click it
  const colorRgbCodes: Record<toolColors, string> = {
    "black": "rgb(0, 0, 0)",
    "red": "rgb(255, 0, 0)",
    "green": "rgb(0, 255, 0)",
    "blue": "rgb(0, 0, 255)",
    "yellow": "rgb(255, 255, 0)"
  }
  const toolColorCode: string = currentTool === "Pen" ? colorRgbCodes[toolColor] : colorRgbCodes[toolColor].slice(0, 3) + "a" + colorRgbCodes[toolColor].slice(3, -1) + ", 0.6)" // Transform to rgba color code for highlighter
  const targetColorBtn: HTMLElement | null = toolConfig?.querySelector(`a.shape.circle[style*="${toolColorCode}"]`) ?? null
  if (targetColorBtn) {
    targetColorBtn.addEventListener("click", blockHrefInline) // Prevents CSP error
    targetColorBtn.click()
  }
}

/**
 * Find the element serving as the button for a specific whiteboard tool
 * 
 * @param toolType String to identify the target tool button (displayed in tooltip when hovering over the button)
 * @returns An HTMLElement that will activate the target tool when clicked
 */
const acquireToolBtn = (toolType: string): HTMLElement | null => {
  const selectorStr: string = `#toolConfigurationContainer > ul a[title="${toolType}"]`
  const toolBtn: HTMLAnchorElement | null = document.querySelector<HTMLAnchorElement>(selectorStr)
  toolBtn?.addEventListener("click", blockHrefInline) // Prevents CSP error that comes from attempting to execute inline JS in href attribute
  return toolBtn
}

/**
 * Click event listener that blocks execution of inline JS void operator within anchor tag's href attribute
 * 
 * @param clickEvent Click event that triggered the listener
 */
const blockHrefInline = (clickEvent: MouseEvent): void => {
  if (clickEvent.target instanceof HTMLAnchorElement && clickEvent.target.href === "javascript:void(0)") {
    clickEvent.preventDefault()
  }
}
