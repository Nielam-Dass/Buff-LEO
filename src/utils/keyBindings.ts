import * as actions from "./actions"


/**
 * Represents a mapping betweeen a keyboard shortcut and an action to perform when the shortcut is pressed
 */
type ShortcutToActionMapping = {
    /**
     * Check if a keyboard event matches a shortcut
     * 
     * @param event Keyboard event to check
     * @returns true if shortcut was pressed, otherwise false
     */
    checkKeydownEvent(event: KeyboardEvent): boolean,

    /**
     * Perform an action within the DOM
     * 
     * @param args Any arguments that may be required
     */
    action(...args: any[]): any
}

// Key bindings to add in LEO
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
