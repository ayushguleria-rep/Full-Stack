const text = document.getElementById("textInput");
const counter = document.getElementById("counter");

text.addEventListener("input", function () {
    counter.textContent = text.value.length;
});
