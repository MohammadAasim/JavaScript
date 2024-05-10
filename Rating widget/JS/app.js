const mouth = document.querySelector('#mouth')
const emotionElements = document.querySelectorAll('.rating-container div')

function selectEmotion(e){
    mouth.classList.remove('happy-mouth','indifferent-mouth','sad-mouth')
    const chooseEmotion = e.target.id
    if(chooseEmotion==='bad'){
        mouth.classList.add('sad-mouth')
    }else if(chooseEmotion === 'okay'){
        mouth.classList.add('indifferent-mouth')
    }else if(chooseEmotion==='good'){
        mouth.classList.add('happy-mouth')
    }
}

emotionElements.forEach(emotionElement =>
    emotionElement.addEventListener('click',selectEmotion)
)