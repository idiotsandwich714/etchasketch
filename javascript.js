const container = document.getElementById('gridContainer');

function createGrid(dimensions) {
    container.style.setProperty('--grid-rows', dimensions);
    container.style.setProperty('--grid-cols', dimensions);
    for (let i = 0; i < (dimensions ** 2); i++) {
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('gridSquare');
        container.appendChild(gridSquare);
    }
}

createGrid(16);