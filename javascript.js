const container = document.getElementById('gridContainer');
const btn = document.getElementById('sizePrompt');

btn.addEventListener('click', () => clearGrid());
btn.addEventListener('click', () => createGrid());

function createGrid() {
    let dimensions = prompt("Enter Desired Square-Pixelage (Maximum: 100)", "");
    
    if (dimensions > 100) {
        alert("You must enter a positive integer");
    } else if (dimensions < 0) {
        alert("You must enter a positive integer");
    } else if (isNaN(dimensions)) {
        alert("You must enter a positive integer");
    } else {
        container.style.setProperty('--grid-rows', dimensions);
        container.style.setProperty('--grid-cols', dimensions);
        for (let i = 0; i < (dimensions * dimensions); i++) {
            let gridSquare = document.createElement('div');
            gridSquare.classList.add('gridSquare');
            gridSquare.addEventListener('mouseover', draw);
            container.appendChild(gridSquare);
        }
    }
}

function clearGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function draw(e) {
    e.target.style.backgroundColor = 'grey';
}

