export const activatePen = (): void => {
    const penBtn: HTMLAnchorElement | null = document.querySelector<HTMLAnchorElement>("#toolConfigurationContainer > ul a[title='Pen']")
    penBtn?.click()
}

export const activateEraser = (): void => {
    console.log("Eraser is active")
}

export const activateTextBox = (): void => {
    console.log("Text box is active")
}

export const activatePointer = (): void => {
    console.log("Pointer is active")
}

export const activateHighlighter = (): void => {
    console.log("Highlighter is active")
}
