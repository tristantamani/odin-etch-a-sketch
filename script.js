function createGrid() {
    let numberOfSquares = prompt("Enter number of squares per side: ");

    if (document.querySelector(".row") != null) {
        let allRows = document.querySelectorAll(".row");
        for (const row of allRows) {
            div.removeChild(row);
        }
    }

    for (let i = 0; i < numberOfSquares; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        div.appendChild(row);

        for (let j = 0; j < numberOfSquares; j++) {
            const square = document.createElement("div");
            square.classList.add("square");
            row.appendChild(square);
            square.addEventListener("mouseenter", () => square.style.backgroundColor = "rebeccapurple");
        }
    }
}

function createButton() {
    const button = document.createElement("button")
    button.textContent = "Press Me!";
    button.addEventListener("click", createGrid);
    div.insertBefore(button, div.firstChild);
}

let div = document.createElement("div");
div.id = "container";
document.body.appendChild(div);

createButton();