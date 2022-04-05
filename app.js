const gridContainer = document.querySelector('.grid-container');

const grid = document.createElement('div');
grid.classList.add('grid');
for (let i = 0; i < 16; i++) {
    const row = document.createElement('div'); 
    row.classList.add('row');
    for (let j = 0; j < 16; j++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.addEventListener('mouseenter', () => square.classList.add('hover'));
        row.appendChild(square);
        if (j == 3) {
            grid.appendChild(row);
        }
    }
}

gridContainer.appendChild(grid);