function grid(count) {
    const conatiner = document.querySelector(".container");
    const grids = [];
    conatiner.innerHTML = ' ';

    for (let i = 0; i < count; i++) {
        grids[i] = [];
        grids[i] = document.createElement('div');
        grids[i].classList.add('row');
        for (let j = 0; j < count; j++) {
            grids[i][j] = document.createElement('div');
            const gridId = 'g_' + i + '_' + j;
            grids[i][j].setAttribute('id', gridId);
            grids[i][j].classList.add('grid');
            grids[i].appendChild(grids[i][j]);
        }
        conatiner.appendChild(grids[i]);
        hoverEffect('defaultHover');
    }
}

function getGrids() {
    const grids = document.getElementsByClassName('grid');
    return grids;
}

function hoverEffect(hover) {
    if(hover == 'defaultHover') {
        hoverDefault();
    }
    const black = document.getElementById('default').addEventListener('click', hoverDefault);
    const random = document.getElementById('changeColor').addEventListener('click', hoverRGB);
    
}

function reset() {
    resetButton = document.getElementById('reset');
    resetButton.addEventListener('click', resetColor);
}

function resetColor() {
    grids = getGrids();
    for (let grid of grids) {
        grid.style.backgroundColor = 'white';
    }
}

function changeSize() {
    sizeBtn = document.getElementById('changeSize');
    sizeBtn.addEventListener('click', askSize);
}

function askSize() {
    let count = parseInt(prompt("Enter number of grid (1-100):"));
    if (count < 1 || count > 100 || isNaN(count)) {
        askSize();
    }
    else {
        grid(count);
    }
}

function hoverRGB() {
    resetColor();
    grids = getGrids();
    for (let id of grids) {
        id.addEventListener(
            'mouseover',
            (event) => {
                event.target.style.backgroundColor = 'rgb(' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ')';
            }
        );
    }
}

function hoverDefault() {
    grids = getGrids();
    for (let id of grids) {
        id.addEventListener(
            'mouseover',
            (event) => {
                event.target.style.backgroundColor = 'black';
            }
        );
    }
}

grid(16);
reset();
changeSize();