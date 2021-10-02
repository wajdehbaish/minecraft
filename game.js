export let generator = "";
const rock = document.querySelector('#rock'),
    grass = document.querySelector('#grass'),
    treeTrunck = document.querySelector('#treeTrunck'),
    treeleaves = document.querySelector('#treeleaves'),
    pickaxe = document.querySelector('#pickaxe'),
    shovel = document.querySelector('#shovel'),
    axe = document.querySelector('#axe');


export function addEventListenerToAllGenerators() {
    rock.addEventListener('click', () => { updateGenerator('rock') })
    grass.addEventListener('click', () => { updateGenerator('grass') })
    treeTrunck.addEventListener('click', () => { updateGenerator('treeTrunck') })
    treeleaves.addEventListener('click', () => { updateGenerator('treeleaves') })
    pickaxe.addEventListener('click', () => { updateGenerator('pickaxe') })
    shovel.addEventListener('click', () => { updateGenerator('shovel') })
    axe.addEventListener('click', () => { updateGenerator('axe') })

}

function updateGenerator(type) {
    generator = type
}