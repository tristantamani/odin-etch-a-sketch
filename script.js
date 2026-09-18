function createGrid() {
    let numberOfSquares = prompt("Enter number of squares per side <= 100: ");

    while (numberOfSquares > 100 || numberOfSquares < 1) {
        numberOfSquares = prompt("Enter number of squares per side <= 100: ");
    }

    if (document.querySelector(".row") != null) {
        let allRows = document.querySelectorAll(".row");
        for (const row of allRows) {
            gridContainer.removeChild(row);
        }
    }

    drawGrid(numberOfSquares);
}

function drawGrid(numberOfSquares) {
    for (let i = 0; i < numberOfSquares; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        gridContainer.appendChild(row);

        for (let j = 0; j < numberOfSquares; j++) {
            const column = document.createElement("div");
            const square = document.createElement("div");

            let size = 500 / numberOfSquares;
            let red = randomizeColor();
            let green = randomizeColor();
            let blue = randomizeColor();
            let opacity = 0;

            column.classList.add("column");
            square.classList.add("square");
            square.style.width = size + "px";
            square.style.height = size + "px";
            column.appendChild(square);
            row.appendChild(column);

            square.addEventListener("mouseenter", () => {
                opacity += 0.1
                square.style.backgroundColor = `rgb(${red}, ${green}, ${blue}, ${opacity})`;
            });
        }
    }
}

function createButton() {
    const button = document.createElement("button")
    button.classList.add("button");
    button.textContent = "Press Me!";
    button.addEventListener("click", createGrid);
    buttonContainer.appendChild(button);
}

function randomizeColor() {
    return Math.floor(Math.random() * 255) + 1;
}

const gridContainer = document.createElement("div");
const buttonContainer = document.createElement("div")

gridContainer.classList.add("grid-container");
buttonContainer.classList.add("button-container");
document.body.appendChild(buttonContainer);
document.body.appendChild(gridContainer);

createButton();