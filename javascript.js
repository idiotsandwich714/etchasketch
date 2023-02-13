function drawingBoard() {
    for (let i = 0; i <= 256; i++) {
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('gridSquare');
        document.getElementById('gridContainer').appendChild(gridSquare);
    }
}

drawingBoard();