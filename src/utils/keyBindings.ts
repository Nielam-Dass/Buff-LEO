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
]

export default bindings
