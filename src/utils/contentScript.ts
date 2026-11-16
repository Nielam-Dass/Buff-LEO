import bindings from "./keyBindings"


if (window.origin === "https://v2.tutor.com" && window.frameElement && window.frameElement.id !== "classroom-frame") {
  // Keydown events from iframes inside the classroom need to be propogated to the parent document
  document.addEventListener("keydown", (e: KeyboardEvent): void => {
    if ((document.activeElement instanceof HTMLElement && !document.activeElement.isContentEditable) || (e.ctrlKey && e.shiftKey)) {
      // If the active element is not a text field, all keydown events get propogated, otherwise Ctrl+Shift must be presssed
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
