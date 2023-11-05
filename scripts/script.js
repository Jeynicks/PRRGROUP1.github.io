const hangmanVid = document.querySelector(".hangman-box video");
const wordDisplay = document.querySelector(".word-display");
const guessesText = document.querySelector(".guesses-text b");
const keyboardDiv = document.querySelector(".keyboard");
const gameModal = document.querySelector(".game-modal");
const playAgainBtn = document.querySelector(".play-again")

let currentWord, correctLetters = [], wrongGuessCount = 0;
const maxGuess = 6;

const resetGame = () => {
    correctLetters = [];
    wrongGuessCount = 0;
    hangmanVid.src = `hangman/hangman-${wrongGuessCount}.mp4`;
    guessesText.innerText =`${wrongGuessCount} / ${maxGuess}`;
    keyboardDiv.querySelectorAll("button").forEach(btn => btn.disabled = false);
    wordDisplay.innerHTML = currentWord.split("").map(() => `<li class="letter"></li>`).join("");
    gameModal.classList.remove("show");

}

const wordList = [
    {
        word: "boolean",
        hint: "A variable used only for true or false data"
    },
    {
        word: "string",
        hint: "A variable used for storing a whole sentence or a single word"
    },
    {
        word: "character",
        hint: "A variable used for storing single symbols/letters"
    },
    {
        word: "float",
        hint: "A variable used for storing numbers with less decimal numbers where it allows 7 significant digits of precision."
    },
    {
        word: "double",
        hint: "A variable used for storing numbers with more decimal numbers where it allows 15 to 17 significant digits of precision."
    },
    {
        word: "integer",
        hint: "A variable used for storing whole numbers."
    },

    {
        word: "variables",
        hint: "It is used to store data types."
    },
    
    {
        word: "operators",
        hint: "This is used to perform operations to variables  and  values."
    },

    {
        word: "arithmetic",
        hint: "An operator that is used to perform common mathematical operations."
    },

    {
        word: "assignment",
        hint: "An operator that is used to assign values to variables"
    },

    {
        word: "comparison",
        hint: "An operator that is used to compare two values( or variables)."
    },
    {
        word: "logical",
        hint: "An operator that is used to determine the logic between variables or value."
    },
    {
        word: "single-line",
        hint: "A comments that starts with two forward slashes (//)."
    },
    {
        word: "multi-line",
        hint: "A comments that starts with /* and ends with */."
    },

    {
        word: "comments",
        hint: "This  can be used to explain code, and to make it more readable. It can also be used to prevent execution when testing alternative code"
    },




];

const getRandomWord = () => {
    const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)];
    currentWord = word;
    document.querySelector(".hint-text b").innerText = hint;
    resetGame();
   

}


const gameOver = (isVictory) => {
    setTimeout(() => {
        const modalText = isVictory ? `Congratulations you guessed the word:` : `The correct word was:`;
        gameModal.querySelector("img").src = `images/${isVictory ? 'victory' : 'lost'}.gif`;
        gameModal.querySelector("h4").innerText = `${isVictory ? 'Congrats!!!' : 'Game Over!'}`;
        gameModal.querySelector("p").innerHTML = `${modalText} <b>${currentWord}<b>`

        const victorySound = document.getElementById("victorySound");
        const defeatSound = document.getElementById("defeatSound");

        if (isVictory) {
            victorySound.play();
        } else {
            defeatSound.play();
        }

        gameModal.classList.add("show");

    }, 300)
}

const click = document.getElementById("click");

const initGame = (button, clickedLetter) => {
    click.currentTime = 1.5;
    click.play();
    click.volume = 0.5;
    
    if(currentWord.includes(clickedLetter)){
        [...currentWord].forEach((letter, index) => {
            if(letter === clickedLetter) {

                correctLetters.push(letter);
                click.currentTime = 0.2;
                click.play();
                click.volume = 0.5;
                wordDisplay.querySelectorAll("li")[index].innerText = letter;
                wordDisplay.querySelectorAll("li")[index].classList.add("guessed");
            }
        })
    } else {

        wrongGuessCount++;    
        hangmanVideo.src = `hangman/hangman-${wrongGuessCount}.mp4`; 
    }

    button.disabled = true;
    guessesText.innerText =`${wrongGuessCount} / ${maxGuess}`;

    if(wrongGuessCount === maxGuess) return gameOver(false);
    if(correctLetters.length === currentWord.length) return gameOver(true);

}

for (let i = 97; i <= 122; i++) {
    const button = document.createElement("button");
    button.innerText = String.fromCharCode(i);
    keyboardDiv.appendChild(button);
    button.addEventListener("click", e => initGame(e.target, String.fromCharCode(i)));
}

const additionalButtons = [" ", "-"];
additionalButtons.forEach(char => {
    const button = document.createElement("button");
    button.innerText = char;
    keyboardDiv.appendChild(button);
    button.addEventListener("click", e => initGame(e.target, char));
});


getRandomWord();
playAgainBtn.addEventListener("click", getRandomWord);