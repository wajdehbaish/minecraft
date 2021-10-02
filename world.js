import { addEventListenerToAllGenerators, generator } from "./game.js";

const worldMatrix = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
    [0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0],
    [0, 0, 0, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 6, 0],
    [0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 6, 0],
    [0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 4, 4, 4, 0, 0, 0, 0, 5, 0, 0],
    [0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 4, 2, 4, 0, 0, 0, 0, 5, 0, 0],
    [0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 5, 0, 0],
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
    [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8]
];

initWorldMatrix(worldMatrix);



function initWorldMatrix(matrix) {
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            let tile = document.createElement('div');
            tile.classList.add('tile');
            tile.dataset.tileType = matrix[row][col];
            tile.dataset.tileCoordinateX = col;
            tile.dataset.tileCoordinateY = row;
            tile.addEventListener('click', (blockClickHandle))
            document.querySelector('.world-matrix').appendChild(tile);
        }
    }
    addEventListenerToAllGenerators()

}


function blockClickHandle(e) {

    const y = e.path[0].dataset.tileType;
    switch (generator) {
        case 'pickaxe':
            usepickaxe(e)
            break;
        case 'shovel':
            useshovel(e)
            break;
        case 'axe':
            usesaxe(e)
            break;
        case 'rock':
            userock(e)
            break
        case 'grass':
            usegrass(e)
            break;
        case 'treeTrunck':
            usetreeTrunck(e)
            break;
        case 'treeleaves':
            usetreeleaves(e)
            break;

    }
}

function usepickaxe(e) {
    if (e.target.getAttribute('data-tile-type') === '2') {
        e.target.setAttribute('data-tile-type', 0)
        let rockCounter = document.querySelector('#rock-counter')
        let rockInv = rockCounter.textContent
        rockCounter.textContent = parseInt(rockInv) + 1 + ''

    }
}

function useshovel(e) {
    if (e.target.getAttribute('data-tile-type') === '3') {
        e.target.setAttribute('data-tile-type', 0)
        let grassCounter = document.querySelector('#grass-counter')
        let grassInv = grassCounter.textContent
        grassCounter.textContent = parseInt(grassInv) + 1 + ''

    }
}

// function usesaxe(e) {
//     if (e.target.getAttribute('data-tile-type') === '5') {
//         e.target.setAttribute('data-tile-type', 0)
//         let treeTrunckCounter = document.querySelector('#treeTrunck-counter')
//         let treeTrunckCounterInv = treeTrunckCounter.textContent
//         treeTrunckCounter.textContent = parseInt(treeTrunckCounterInv) + 1 + ''
//     }
// }

function usesaxe(e) {
    if (e.target.getAttribute('data-tile-type') === '6' || e.target.getAttribute('data-tile-type') === '5') {
        e.target.setAttribute('data-tile-type', 0)
        let treeleavesCounter = document.querySelector('#treeleaves-counter')
        let treeleavesCounterInv = treeleavesCounter.textContent
        treeleavesCounter.textContent = parseInt(treeleavesCounterInv) + 1 + ''
    }
}

function usegrass(e) {
    console.log('g', e.target.getAttribute('data-tile-type'));
    if (e.target.getAttribute('data-tile-type') == 0)
        e.target.setAttribute('data-tile-type', 3)
    let grassCounter = document.querySelector('#grass-counter')
    let grassCounterInv = grassCounter.textContent

    if (Number(grassCounterInv) > 0) {

        grassCounter.textContent = parseInt(grassCounterInv) - 1 + ''
    }
}

function userock(e) {
    if (e.target.getAttribute('data-tile-type') == 0)
        e.target.setAttribute('data-tile-type', 2)
    let rockCounter = document.querySelector('#rock-counter')
    let rockCounterInv = rockCounter.textContent

    if (Number(rockCounterInv) > 0)
        rockCounter.textContent = parseInt(rockCounterInv) - 1 + ''
}

function usetreeTrunck(e) {
    if (e.target.getAttribute('data-tile-type') == 0)
        e.target.setAttribute('data-tile-type', 5)
    let treeTrunckCounter = document.querySelector('#treeTrunck-counter')
    let treeTrunckCounterInv = treeTrunckCounter.textContent
    if (Number(treeTrunckCounterInv) > 0)
        treeTrunckCounter.textContent = parseInt(treeTrunckCounterInv) - 1 + ''

}

function usetreeleaves(e) {
    if (e.target.getAttribute('data-tile-type') == 0)
        e.target.setAttribute('data-tile-type', 6)
    let treeleavesCounter = document.querySelector('#treeleaves-counter')
    let treeleavesCounterInv = treeleavesCounter.textContent
    if (Number(treeleavesCounterInv) > 0)
        treeleavesCounter.textContent = parseInt(treeleavesCounterInv) - 1 + ''

}