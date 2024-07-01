
let computerNum = 0;

let playButton = document.getElementById("play-button");
let resultArea = document.getElementById("result-area");
let userInput = document.getElementById("user-input");

playButton.addEventListener("click", play);

pickRandomNum();

function pickRandomNum() {
    computerNum = Math.floor(Math.random() * 100) + 1;
    console.log("정답", computerNum);
}

function play() {
    
    let userValue = parseInt(userInput.value, 10);
    
    if (userValue < computerNum) {
        resultArea.textContent = "UP";
        console.log("up");
    } else if (userValue > computerNum) {
        resultArea.textContent = "DOWN";
        console.log("down");
    } else {
        resultArea.textContent = "맞췄습니다.";
        console.log("맞췄습니다.");
    }
}