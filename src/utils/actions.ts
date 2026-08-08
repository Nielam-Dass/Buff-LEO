export const activatePen = (): void => {
    const penBtn: HTMLElement | null = acquireToolBtn("Pen")
    penBtn?.click()
}

export const activateEraser = (): void => {
    const eraserBtn: HTMLElement | null = acquireToolBtn("Eraser")
    eraserBtn?.click()
}

export const activateTextBox = (): void => {
    const textBoxBtn: HTMLElement | null = acquireToolBtn("Text")
    textBoxBtn?.click()
}

export const activatePointer = (): void => {
    const pointerBtn: HTMLElement | null = acquireToolBtn("Pointer")
    pointerBtn?.click()
}

export const activateHighlighter = (): void => {
    const highlighterBtn: HTMLElement | null = acquireToolBtn("Highlighter")
    highlighterBtn?.click()
}

const acquireToolBtn = (toolType: string): HTMLElement | null => {
    const selectorStr: string = `#toolConfigurationContainer > ul a[title="${toolType}"]`
    const toolBtn: HTMLAnchorElement | null = document.querySelector<HTMLAnchorElement>(selectorStr)
    toolBtn?.addEventListener("click", blockHrefInline)
    return toolBtn
}

const blockHrefInline = (clickEvent: MouseEvent): void => {
    if (clickEvent.target instanceof HTMLAnchorElement && clickEvent.target.href==="javascript:void(0)") {
        clickEvent.preventDefault()
    }
}
