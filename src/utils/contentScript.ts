import bindings from "./keyBindings"

// Set up event listeners for each keyboard shortcut
for (const binding of bindings) {
    document.addEventListener("keydown", (e: KeyboardEvent): void => {
        if (binding.checkKeydownEvent(e)) {
            e.preventDefault()
            binding.action()
        }
    })
}
