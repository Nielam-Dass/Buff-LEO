document.addEventListener("keydown", (e: KeyboardEvent): void => {
    if (e.ctrlKey && e.shiftKey && e.code==="Digit1") {
        console.log("Ctrl + Shift + 1 Pressed!!!")
    }
})
