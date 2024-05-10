const colorsContainers = document.querySelector('.colors-container')
const spawnButton = document.querySelector('#spawn-button')

let colorsBlocks = ['','','','']

function getRandomNumber(){
    return Math.floor(Math.random()*255)
}

function spawn(){
    // console.log('spawn')
    colorsContainers.innerHTML=''
    const commonColor = getRandomNumber()

    colorsBlocks.forEach((_colorsBlock ,index)=>{
        colorsBlocks[index]='rgb('+commonColor+','+getRandomNumber()+','+getRandomNumber()+')'

    })

    colorsBlocks.forEach(colorsBlock=>{
        const divElement = document.createElement('div')
        divElement.style.backgroundColor = colorsBlock
        divElement.textContent = colorsBlock;
        colorsContainers.append(divElement)
    })
}
spawnButton.addEventListener('click',spawn)
document.addEventListener('keydown',spawn)