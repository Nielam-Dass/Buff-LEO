import * as actions from "./actions"


type ShortcutToActionMapping = {
    checkKeydownEvent(event: KeyboardEvent): boolean,
    action(...args: any[]): any
}

const bindings: ShortcutToActionMapping[] = [
    {
        checkKeydownEvent: event => event.ctrlKey && event.shiftKey && event.code==="Digit1",
        action: actions.activatePen
    },
    {
        checkKeydownEvent: event => event.ctrlKey && event.shiftKey && event.code==="Digit2",
        action: actions.activateEraser
    },
    {
        checkKeydownEvent: event => event.ctrlKey && event.shiftKey && event.code==="Digit3",
        action: actions.activateTextBox
    },
    {
        checkKeydownEvent: event => event.ctrlKey && event.shiftKey && event.code==="Digit4",
        action: actions.activatePointer
    },
    {
        checkKeydownEvent: event => event.ctrlKey && event.shiftKey && event.code==="Digit5",
        action: actions.activateHighlighter
    },
]

export default bindings
