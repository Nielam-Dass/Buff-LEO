import bindings from "./keyBindings"


if (window.origin === "https://v2.tutor.com" && window.frameElement && window.frameElement.id !== "classroom-frame") {
  // Keydown events from iframes inside the classroom need to be propogated to the parent document
  document.addEventListener("keydown", (e: KeyboardEvent): void => {
    if (e.ctrlKey && e.shiftKey) {
      window.parent.document.dispatchEvent(new KeyboardEvent("keydown", e))
    }
  })
}
else if (window.origin === "https://v2.tutor.com") {
  // Set up event listeners for each keyboard shortcut in the main classroom frame
  for (const binding of bindings) {
    document.addEventListener("keydown", (e: KeyboardEvent): void => {
      if (binding.checkKeydownEvent(e)) {
        e.preventDefault()
        binding.action()
      }
    })
  }
}
