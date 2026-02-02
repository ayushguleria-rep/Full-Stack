const textInput = document.getElementById("textInput");
const characterCounter = document.getElementById("counter");

textInput.addEventListener("input", () => {
    characterCounter.textContent = textInput.value.length;
});
