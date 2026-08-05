import bindings from "./keyBindings"


for (const binding of bindings) {
    document.addEventListener("keydown", (e: KeyboardEvent): void => {
        if (binding.checkKeydownEvent(e)) binding.action()
    })
}
