const blockHrefInline = (clickEvent: MouseEvent) => {
    if (clickEvent.target instanceof HTMLAnchorElement && clickEvent.target.href==="javascript:void(0)") {
        clickEvent.preventDefault()
    }
}

export const activatePen = (): void => {
    const penBtn: HTMLAnchorElement | null = document.querySelector<HTMLAnchorElement>("#toolConfigurationContainer > ul a[title='Pen']")
    penBtn?.addEventListener("click", blockHrefInline)
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
