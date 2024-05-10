const sliderFill = document.querySelector('.fill')
const timeLeftText =  document.querySelector('#time-left')
const startCount=6;
let timeLeft = startCount
const timeId = setInterval(()=>{
    timeLeft--;
    timeLeftText.textContent=timeLeft;
    sliderFill.style.width = (timeLeft/startCount)*100 + '%'
    if(timeLeft<=0){
        clearInterval(timeId)
        timeLeftText.textContent='FIN!'
        suprise()
    }
},1000)

function suprise(){
    const colors = [
        'rgba(255,105,97,0.5)',
        'rgba(97,168,2557,0.5)',
        'rgba(247,255,97,0.5)',
        'rgba(97,255,184,0.5)',
        'rgba(255,255,255,0.5)'
    ]
    for (let i=0;i<500;i++){
        setTimeout(()=>{
            const circleElement = document.createElement('div')
            circleElement.classList.add('circle');
            circleElement.style.left = Math.floor(Math.random()*100)+'%'
            circleElement.style.top = Math.floor(Math.random()*100)+'%'
            circleElement.style.right = Math.floor(Math.random()*100)+'%'
            circleElement.style.buttom = Math.floor(Math.random()*100)+'%'
            circleElement.style.backgroundColor = colors[Math.floor(Math.random()*colors.length)]
            timeLeftText.append(circleElement)
        },i*5)
    }   
    
}