let addToDoButton = document.getElementById("add-Button");
let toDoContainer = document.getElementById("to-do-container");
let inputText = document.getElementById("input-Text");
let clearButton = document.getElementById("clear-Button");
addToDoButton.addEventListener("click", () => {
    if (inputText.value.trim() == "") return;
    let paragraph = document.createElement("p");
    paragraph.classList.add("parag-style");
    paragraph.textContent = inputText.value + " 📍";
    toDoContainer.append(paragraph);
    inputText.value = "";
    paragraph.addEventListener("click", () => {
        paragraph.style.textDecoration = "line-through";
    });
    paragraph.addEventListener("dblclick", () => {
        toDoContainer.removeChild(paragraph);
    });

});

clearButton.addEventListener("click", () => {
    while (toDoContainer.firstChild) {
        toDoContainer.removeChild(toDoContainer.firstChild);
    }
});

inputText.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && inputText.value.trim() !== "") {
        addToDoButton.click();
    }
})

