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

/**
 * Find the element serving as the button for a specific whiteboard tool
 * 
 * @param toolType String to identify the target tool button (displayed in tooltip when hovering over the button)
 * @returns An HTMLElement that will activate the target tool when clicked
 */
const acquireToolBtn = (toolType: string): HTMLElement | null => {
    const selectorStr: string = `#toolConfigurationContainer > ul a[title="${toolType}"]`
    const toolBtn: HTMLAnchorElement | null = document.querySelector<HTMLAnchorElement>(selectorStr)
    toolBtn?.addEventListener("click", blockHrefInline)  // Prevents CSP error that comes from attempting to execute inline JS in href attribute
    return toolBtn
}

/**
 * Click event listener that blocks execution of inline JS void operator within anchor tag's href attribute
 * 
 * @param clickEvent Click event that triggered the listener
 */
const blockHrefInline = (clickEvent: MouseEvent): void => {
    if (clickEvent.target instanceof HTMLAnchorElement && clickEvent.target.href==="javascript:void(0)") {
        clickEvent.preventDefault()
    }
}
