function grid() {
    const conatiner = document.querySelector(".container");
    let i = 1;
    const grids = [];

    for (let i = 0; i < 16; i++) {
        grids[i] = [];
        grids[i] = document.createElement('div');
        grids[i].classList.add('row')
        for (let j = 0; j < 16; j++) {
            grids[i][j] = document.createElement('div');
            const gridId = 'g_' + i + '_' + j;
            grids[i][j].setAttribute('id', gridId);
            grids[i][j].classList.add('grid');
            grids[i].appendChild(grids[i][j]);
        }
        conatiner.appendChild(grids[i]);
    }
}

function hover_effect() {
const grids = document.getElementsByClassName("grid");
    for (let ids of grids) {
        ids.addEventListener(
        'mouseover',
        (event) => {
            event.target.style.backgroundColor = 'black';
        }
        );
    }
}

grid();
hover_effect();