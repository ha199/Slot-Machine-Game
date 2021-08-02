let value1 = document.getElementById('value1')
let value2 = document.getElementById('value2')
let value3 = document.getElementById('value3')

let inpSpeed = document.getElementById('inpSpeed')
let btnStart = document.getElementById('btnStart')
let btnStop = document.getElementById('btnStop')

let myoutput = document.getElementById('myoutput')

let values = [
    '😍','😊','😜','😂','😘','😎','😉','😱','🤑'
]

// it will choose random  value from above 9 elements
function getRandomValue(){
    return values[Math.floor(Math.random()*9)]
}


function upddateAnimation(newSpeed){
    if(animationid) clearInterval(animationid)

    animationid = setInterval(()=>{
        value1.innerText = getRandomValue()
        value2.innerText = getRandomValue()
        value3.innerText = getRandomValue()
        
    },1000/newSpeed)
}

inpSpeed.onchange = function(ev){
    // console.log("value changed to ",ev.target.value)
    // document.documentElement => this is ':root' of css
    document.documentElement.style.setProperty('--speed',ev.target.value)
    updateAnimation(ev.target.value)
  
}

function stopclick(){
    clearInterval(animationid);

    console.log("stop button clicked")
    if(value1.innerText==value2.innerText && value2.innerText==value3.innerText){
        text = ' Well Done Champ , You Won'
    }else{
        text = ' OOPS Give it another try'
    }

    value1.classList.remove('animation')
    value2.classList.remove('animation')
    value3.classList.remove('animation')
    myoutput.textContent = text


}

function startclick(){
    upddateAnimation(inpSpeed.value)
    value1.classList.add('animation')
    value2.classList.add('animation')
    value3.classList.add('animation')
    

    myoutput.textContent = 'Wow,Game is Runnning'
}
