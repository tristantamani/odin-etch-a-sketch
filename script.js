function createGrid() {
    for (let i = 0; i < 16; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        div.appendChild(row);

        for (let j = 0; j < 16; j++) {
            const square = document.createElement("div");
            square.classList.add("square");
            row.appendChild(square);
            square.addEventListener("mouseenter", () => square.style.backgroundColor = "rebeccapurple");
        }
    }
}

const div = document.querySelector("#container");

createGrid();