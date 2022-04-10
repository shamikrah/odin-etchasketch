const container = document.querySelector('.container');

const grid = document.createElement('div');
grid.classList.add('grid');
function createDefaultGrid() {
    for (let i = 0; i < 16; i++) {
        const row = document.createElement('div'); 
        row.classList.add('row');
        for (let j = 0; j < 16; j++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.addEventListener('mouseenter', () => square.classList.add('hover'));
            row.appendChild(square);
            if (j == 15) {
                grid.appendChild(row);
            }
        }
    }
}
createDefaultGrid();
container.appendChild(grid);

const btn = document.querySelector('button');
let size;
btn.addEventListener('click', () => {
    size = prompt('Enter the size of the new grid (maximum 100)', '16');
    console.log(`New size is ${size}`);
    createCustomGrid(size);
});

function resetGrid() {
    let child = grid.lastElementChild;
    while (child) {
        grid.removeChild(child);
        child = grid.lastElementChild;
    }
}
function createCustomGrid(size) {
    resetGrid();
    for (let i = 0; i < size; i++) {
        const row = document.createElement('div'); 
        row.classList.add('row');
        for (let j = 0; j < size; j++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.addEventListener('mouseenter', () => square.classList.add('hover'));
            row.appendChild(square);
            if (j == size - 1) {
                grid.appendChild(row);
            }
        }
    }

}

