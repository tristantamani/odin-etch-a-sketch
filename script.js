function createGrid() {
    let numberOfSquares = prompt("Enter number of squares per side <= 100: ");

    while (numberOfSquares > 100 || numberOfSquares < 1) {
        numberOfSquares = prompt("Enter number of squares per side <= 100: ");
    }

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
            const column = document.createElement("div");
            column.classList.add("column");

            const square = document.createElement("div");
            square.classList.add("square");

            let size = 500 / numberOfSquares;
            square.style.width = size + "px";
            square.style.height = size + "px";

            column.appendChild(square);
            row.appendChild(column);

            let red = randomizeColor();
            let green = randomizeColor();
            let blue = randomizeColor();
            let opacity = 0;
            square.addEventListener("mouseenter", () => {
                square.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
                opacity += 0.1
                square.style.opacity = opacity + "";
            });
        }
    }
}

function createButton() {
    const button = document.createElement("button")
    button.textContent = "Press Me!";
    button.addEventListener("click", createGrid);
    document.body.insertBefore(button, document.body.firstChild);
}

function randomizeColor() {
    return Math.floor(Math.random() * 255) + 1;
}

let div = document.createElement("div");
div.id = "container";
document.body.appendChild(div);

createButton();