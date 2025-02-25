const timeDisplay = document.querySelector('.time')
const startBtn = document.querySelector('.start')
const stopBtn = document.querySelector('.stop')
const resetBtn = document.querySelector('reset')

let timer = null;
let seconds = 0

function updateTime() {
    const hour = Math.floor(seconds / 3600)
    const min = Math.floor((seconds % 3600) / 60)
    const sec = seconds % 60


    console.log(hour, min, sec);
    timeDisplay.textContent = `${String(hour).padStart(2, '0')}:${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`
}
function startTimer(){
    if(!timer){
        timer=setInterval(function(){
            seconds++
            updateTime()
        },.1)
    }
}

function stopTimer(){
    clearInterval(timer)
    timer=null
}

function resetTimer(){
    clearInterval(timer)
    timer=null
    seconds=0;
    updateTime()
}

startBtn.addEventListener('click',startTimer)
stopBtn.addEventListener('click',stopTimer)
resetBtn.addEventListener('click',resetTimer)

