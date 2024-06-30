let computerNum = 0

let playButton = document.getElementById("play-button")

let resultArea = document.getElementById("result-area")
console.log(playButton)
playButton.addEventListener("click", play)

let userInput = document.getElementById("user-input")
function pickRandomNum() {
    computerNum = Math.floor(Math.random()*100)+1;
    console.log("정답", computerNum);
}

function play() {
   let userValue = userInput.value;
   if(userValue < computerNum) {
    resultArea.textContent = "UP"
        console.log("up")
   }else if(userValue > computerNum){
        resultArea.textContent = "DOWN"
   }else{
    resultArea.textContent = "맞췄습니다."
    
   }
}