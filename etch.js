function grid() {
    const conatiner = document.querySelector("#container");
    let i = 1;
    const grids = [];

    for (let i = 0; i < 16; i++) {
        grids[i] = [];
        grids[i] = document.createElement('div');
        grids[i].classList.add('row' + i)
        for (let j = 0; j < 16; j++) {
            grids[i][j] = document.createElement('div');
            grids[i][j].classList.add('grid' + i + j);
            grids[i][j].textContent = "grid" + i + j;
            grids[i].appendChild(grids[i][j]);
        }
        conatiner.appendChild(grids[i]);
    }
}
grid();
