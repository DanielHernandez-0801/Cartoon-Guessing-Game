let images = ["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44"]
let btns = ["a","b","c","d"]
let names = ["Spongebob","Batman","Phineas","Jerry","Naruto","Bambi","Baymax","Bugs Bunny","Buzz Lightyear","Casper","Cindirella","Deadpool","Donald Duck","Droopy","Fred Flintstone","Garfield","Goku","Goofy","Homer","Iron Man","Kenny","Kermit","Nemo","Olaf","Patrick","Perry","Pickachu","Pink Panther","Popeye","Porky Pig","Mr. Potato","Scooby Doo","Shaggy","Shrek","Snow White","Spiderman","Squidward","Stewie","Stitch","Superman","Taz","Tigger","Winnie Pooh","Woody", "Yogi"]
let count = 0
let CorrectAnswers = 0
let pick = ""
let answerBtn = 0
let answer = 0
let answerBtnPressed = false

function beginGame() {
    let containerEl = document.getElementById("cont")
    let beginEl = document.getElementById("beginBtn") 
    containerEl.style.display = "flex"
    beginEl.style.display = "none"
    document.getElementById("PlayAgain").style.display = "none"
    document.getElementById("Home").style.display = "none"
    document.getElementById("score").textContent = ""
    count = 0
    CorrectAnswers = 0
    renderGame()
}

function reset() {
    document.getElementById(pick).style.display = "none"
    renderGame()
}

function renderGame() {
    if (count == 10) {
        gameOver()
        return
    }
    ++count

    // Reset some values
    answerBtnPressed = false
    for (let i = 0; i < 4; ++i) {
        document.getElementById(btns[i]).style.backgroundColor = "lightblue"
    }
    document.getElementById("result").textContent = ""
    document.getElementById("continueBtn").style.display = "none"

    // Display Random Image
    answer = Math.floor(Math.random() * images.length)
    pick = images[answer]
    let imageEl = document.getElementById(pick)
    imageEl.style.filter = "blur(40px)"
    imageEl.style.display = "inline"

    // Place Possible Answers
    answerBtn = Math.floor(Math.random() * 4)
    document.getElementById(btns[answerBtn]).textContent = names[answer]
    let indices = [answer,0,0,0]
    for (let i = 1; i < 4; ++i) {
        let x = Math.floor(Math.random() * images.length)
        console.log(x)
        let check = false
        for (let j = 0; j < i; ++j) {
            if (indices[j] == x) {
                check = true
            }
        }
        if (check) {
            --i;
        } else {
            indices[i] = x
        }
    }
    let index = 1
    for (let i = 0; i < 4; ++i) {
        if (btns[i] != btns[answerBtn]) {
            document.getElementById(btns[i]).textContent = names[indices[index]]
            ++index
        }
    }
}

function zero() {
    let imageEl = document.getElementById(pick)
    imageEl.style.filter = "blur(0)"
    document.getElementById("continueBtn").style.display = "inline"
    if (!answerBtnPressed) {
        answerBtnPressed = true
        let btnEl = document.getElementById(btns[answerBtn])
        btnEl.style.backgroundColor = "green"
        if (answerBtn != 0) {
            let wrongBtn = document.getElementById(btns[0])
            wrongBtn.style.backgroundColor = "red"
            let resultEl = document.getElementById("result")
            resultEl.textContent = "Wrong Answer :("
        } else {
            let resultEl = document.getElementById("result")
            resultEl.textContent = "Correct !!!"
            ++CorrectAnswers
        }
    }
}

function one() {
    let imageEl = document.getElementById(pick)
    imageEl.style.filter = "blur(0)"
    document.getElementById("continueBtn").style.display = "inline"
    if (!answerBtnPressed) {
        answerBtnPressed = true
        let btnEl = document.getElementById(btns[answerBtn])
        btnEl.style.backgroundColor = "green"
        if (answerBtn != 1) {
            let wrongBtn = document.getElementById(btns[1])
            wrongBtn.style.backgroundColor = "red"
            let resultEl = document.getElementById("result")
            resultEl.textContent = "Wrong Answer :("
        } else {
            let resultEl = document.getElementById("result")
            resultEl.textContent = "Correct !!!"
            ++CorrectAnswers
        }
    }
}

function two() {
    let imageEl = document.getElementById(pick)
    imageEl.style.filter = "blur(0)"
    document.getElementById("continueBtn").style.display = "inline"
    if (!answerBtnPressed) {
        answerBtnPressed = true
        let btnEl = document.getElementById(btns[answerBtn])
        btnEl.style.backgroundColor = "green"
        if (answerBtn != 2) {
            let wrongBtn = document.getElementById(btns[2])
            wrongBtn.style.backgroundColor = "red"
            let resultEl = document.getElementById("result")
            resultEl.textContent = "Wrong Answer :("
        } else {
            let resultEl = document.getElementById("result")
            resultEl.textContent = "Correct !!!"
            ++CorrectAnswers
        }
    }
}

function three() {
    let imageEl = document.getElementById(pick)
    imageEl.style.filter = "blur(0)"
    document.getElementById("continueBtn").style.display = "inline"
    if (!answerBtnPressed) {
        answerBtnPressed = true
        let btnEl = document.getElementById(btns[answerBtn])
        btnEl.style.backgroundColor = "green"
        if (answerBtn != 3) {
            let wrongBtn = document.getElementById(btns[3])
            wrongBtn.style.backgroundColor = "red"
            let resultEl = document.getElementById("result")
            resultEl.textContent = "Wrong Answer :("
        } else {
            let resultEl = document.getElementById("result")
            resultEl.textContent = "Correct !!!"
            ++CorrectAnswers
        }
    }
}

function gameOver() {
    let containerEl = document.getElementById("cont")
    let playAgainEl = document.getElementById("PlayAgain")
    let homeEl = document.getElementById("Home")
    let scoreEl = document.getElementById("score")
    containerEl.style.display = "none"
    playAgainEl.style.display = "inline"
    homeEl.style.display = "inline"
    scoreEl.textContent = String("Your score was: " + CorrectAnswers + "/10")
}