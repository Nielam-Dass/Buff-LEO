type ShortcutToActionMapping = {
    checkKeydownEvent(event: KeyboardEvent): boolean,
    action(...args: any[]): any
}

const bindings: ShortcutToActionMapping[] = [
    {
        checkKeydownEvent: event => event.ctrlKey && event.shiftKey && event.code==="Digit1",
        action: () => console.log("Control Shift 1 pressed!")
    },
    {
        checkKeydownEvent: event => event.ctrlKey && event.shiftKey && event.code==="Digit2",
        action: () => console.log("Control Shift 2 pressed!")
    },
]

export default bindings
