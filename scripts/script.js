const hangmanVid = document.querySelector(".hangman-box video");
const wordDisplay = document.querySelector(".word-display");
const guessesText = document.querySelector(".guesses-text b");
const keyboardDiv = document.querySelector(".keyboard");
const gameModal = document.querySelector(".game-modal");
const playAgainBtn = document.querySelector(".play-again")

let currentWord, correctLetters = [], wrongGuessCount = 0;
const maxGuess = 6;

const resetGame = () => {
    const victorySound = document.getElementById("victorySound");
    correctLetters = [];
    wrongGuessCount = 0;
    hangmanVid.src = `hangman/hangman-${wrongGuessCount}.mp4`;
    guessesText.innerText =`${wrongGuessCount} / ${maxGuess}`;
    keyboardDiv.querySelectorAll("button").forEach(btn => btn.disabled = false);
    wordDisplay.innerHTML = currentWord.split("").map(() => `<li class="letter"></li>`).join("");
    gameModal.classList.remove("show");
    victorySound.pause();
    victorySound.currentTime = 0;
    defeatSound.pause();
    defeatSound.currentTime = 0;


}

const wordList = [
    {
        word: "talumpati",
        hint: "Isang buod na kaisipan o opinyon ng isang tao na pinababatid sa pamamagitan ng pagsasalita sa entablado."
    },

    {
        word: "pamagat",
        hint: "Inilalahad ang layunin ng talumpati."
    },

    {
        word: "katawan",
        hint: "Nakasaad dito ang paksang tatalakayin ng mananalumpati."
    },

    {
        word: "katapusan",
        hint: "Ang pagwawakas ang pinakasukdol ng buod ng isang talumpati."
    },

    {
        word: "tinig",
        hint: "Ito ang tulin o bilis ng pananalita, pagbibigay diin sa mahalagang salita o mensahe na kailangang maunawaan ng tagapakinig, tono ng pananalita."
    },

    {
        word: "tindig",
        hint: "Iwasan ang tindig military na parang naninigas ang katawan. Sikaping maging magaan ang katawan at nakarelaks."
    },

    {
        word: "galaw",
        hint: "Tumutukoy sa anomang pagkilos na ginagawa ng tao."
    },

    {
        word: "kumpas ng kamay",
        hint: "Ginagamit ito sa pagbibigay-diin sa sinasabi. Halimbawa, karaniwang itinatas ang hintuturo o braso kung ipinapahayag ang mahalagang opinion o puntos ng talumpati o pananalita."
    },

    {
        word: "kahandaan",
        hint: "Malalaman agad ng tagapakinig kung pinaghandaang mabuti ang pagtatalumpati sa panimula o introduksiyong bibigkas ng tagapagsalita."
    },

    {
        word: "kaalaman sa paksa",
        hint: "Makikita ang kanyang kahusayan sa paksang tinatalakay sa paraan ng pagpapaliwanag at pagbibigay interpretasyon."
    },

    {
        word: "kahusayan sa pagsasalita",
        hint: "Madaling maganyak na makinig ang publiko kung mataas at mahusay magsalita ang mananalumpati."
    },

    {
        word: "talumpating pampalibang",
        hint: "Ang mananalumpati ay nagpapatawa sa pamamagitan ng anekdota o maikling kwento."
    },

    {
        word: "talumpating nagpapakilala",
        hint: "Kilala rin ito sa tawag na panimulang talumpati at karaniwang lamang na maikli lalo na kung ang ipinakilala ay kilala na o may pangalan na."
    },

    {
        word: "talumpating pangkabatiran",
        hint: "Ito ang gamit sa mga panayam, kumbensyon at mga pagtitipong pang siyentipiko."
    },

    {
        word: "talumpating nagbibigay-galang",
        hint: "Ginagamit ito sa pagsalubong sa isang panauhin, pagttangap sa kasapi, o kaya ay sa mga samahang mawawalay o aalis."
    },

    {
        word: "talumpating nagpaparangal",
        hint: "Layunin nitong magbigay ng papuri sa mga kabutihang nagawa nito."
    },

    {
        word: "talumpating pampasigla",
        hint: "Layunin ng talumpating ito na magbigay inspirasyon sa mga nakikinig."
    },

    {
        word: "impromptu",
        hint: "Ito ay biglaang talumpati na binibigkas pamamaraan na maaring gamiting gabay sa pagbibigkas ng biglaang talumpati."
    },

    {
        word: "hinga ng malalim",
        hint: "Dahan-dahan tumayo at lumakad patungong tanghalan."
    },

    {
        word: "magkaroon ng tiwala sa sarili",
        hint: "Tingnan ang buong paligid at ngumiti sa tagapakinig."
    },

    {
        word: "magsalita ng mabagal",
        hint: "Ito ay paraan na makakatulong sa iyo na mag-isip kung ano ang susunod na sasabihin."
    },

    {
        word: "magfocus",
        hint: "Iwasang mag-isip ng negatibo dahil sa kawalan ng kahandaan."
    },

    {
        word: "extempore",
        hint: "Ang paghahanda sa ganitong tipo o uri ng talumpati ay limitado sa oras sa pagitan ng pagkuha ng paksa at mismong paligsahan."
    },

    {
        word: "isinaulong talumpati",
        hint: "Sa bahaging ito, ang tagapagsalita ay gumagawa muna ng kaniyang talumpati."
    },

    {
        word: "pagbasa ng papel sa panayam o kumperensya",
        hint: "Makikita sa bahaging ito ang kasanayan sa pagsukat ng papel na babasahin sa kumperensya."
    },

    {
        word: "uri ng talumpati ayon sa pamamaraan",
        hint: "Dagli - ito ang uri ng talumpati na hindi pinaghandaan."
    },

    {
        word: "maluwag",
        hint: "May panahon para maihanda at magtipon ng datos ang mananalumpati bago ang kanyang pagsasalita."
    },

    {
        word: "pinaghahandaan",
        hint: "Maaring isinulat, binabasa o sinasaulo at may sapat na pag-aaral sa paksa."
    },

    {
        word: "pumili ng magandang paksa",
        hint: "Tipunin ang mga materyales na maaring pagkunan ng impormasyon."
    },

    {
        word: "maging sensitibo",
        hint: "Kung maari iwasan na mapag-usapan lamang ang tungkol sa sarili at pangsariling kapakinabangan."
    },
    {
        word: "pagpupulong",
        hint: "Ito ay pangkaraniwang gawain sa bawat samahan, organisasyon, kompanya, paaralan, institusyon, at iba pa."
    },

    {
        word: "memorandom",
        hint: "Ito ay kadalasang maikli lamang na ang pangunahing layunin ay magbigay impormasyon, tagubilin, o kahilingan."
    },

    {
        word: "puti",
        hint: "Ginagamit sa pangkalahatang kautusan."
    },

    {
        word: "pink o rosas",
        hint: "Ginagamit para sa request o order na nanggagaling sa purchasing department."
    },

    {
        word: "dilaw o luntian",
        hint: "Ginagamit sa mga memo na nanggagaling sa marketing o accounting department."
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
            victorySound.loop = true;
            victorySound.play();
            
        } else {
            defeatSound.loop = true;
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
