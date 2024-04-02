const questions = [
    {
        question: "The activity of setting up a business or business",
        answers: [
            {text: "Entrepreneur", correct: false},
            {text: "Entrepreneurship", correct: true},
            {text: "Risk Taker", correct: false},
            {text: "Sales Talker", correct: false},
        ]
    },
    {
        question: "It means that because of Entrepreneurship many organizations will exist",
        answers: [
            {text: "Improving Standard of Living", correct: false},
            {text: "Development of Managerial Capabilities", correct: false},
            {text: "Means of Economic Development", correct: false},
            {text: "Creations of Organizations", correct: true},
        ]
    },
    {
        question: "Not only the life of the entrepreneurs iss improved but also the society where the business is located",
        answers: [
            {text: "Improving Standard of Living", correct: false},
            {text: "Development of Managerial Capabilities", correct: false},
            {text: "Means of Economic Development", correct: true},
            {text: "Creations of Organizations", correct: false},
        ]
    },
    {
        question: "It aids entrepreneurs to develop his/her managerial skills",
        answers: [
            {text: "Improving Standard of Living", correct: false},
            {text: "Development of Managerial Capabilities", correct: true},
            {text: "Means of Economic Development", correct: false},
            {text: "Creations of Organizations", correct: false},
        ]
    },
    {
        question: "Entrepreneurship can lift up the economic status of an individual",
        answers: [
            {text: "Improving Standard of Living", correct: true},
            {text: "Development of Managerial Capabilities", correct: false},
            {text: "Means of Economic Development", correct: false},
            {text: "Creations of Organizations", correct: false},
        ]
    },
    {
        question: "What does entreprendre mean",
        answers: [
            {text: "Entrepreneur", correct: false},
            {text: "Entrepreneurship", correct: false},
            {text: "To undertake", correct: true},
            {text: "Enterprise", correct: false},
        ]
    },
    {
        question: "Entrepreneurs are __________ they are willing to take risks and generate unique ideas that can provide profitable solutions to the market and the society",
        answers: [
            {text: "Risk Takers", correct: false},
            {text: "Innovators", correct: true},
            {text: "Initiative", correct: false},
            {text: "Problem Solver", correct: false},
        ]
    },
    {
        question: "Pursue things to get done regardless of the challenges",
        answers: [
            {text: "Proactive", correct: false},
            {text: "Persuasion", correct: false},
            {text: "Perseverance", correct: true},
            {text: "Planner", correct: false},
        ]
    },
    {
        question: "Can classify oppurtunities and seize it",
        answers: [
            {text: "Risk Taker", correct: false},
            {text: "Initiative", correct: false},
            {text: "Persuasion", correct: false},
            {text: "Proactive", correct: true},
        ]
    },
    {
        question: "Makes plan before doing things and does not fail to monitor it",
        answers: [
            {text: "Planner", correct: true},
            {text: "Initiative", correct: false},
            {text: "Perseverance", correct: false},
            {text: "Risk Taker", correct: false},
        ]
    },
    {
        question: "Willing to gamble  but will calculate it first",
        answers: [
            {text: "Risk Taker", correct: true},
            {text: "Initiative", correct: false},
            {text: "Persuasion", correct: false},
            {text: "Proactive", correct: false},
        ]
    },
    {
        question: "Doing things before even told",
        answers: [
            {text: "Risk Takers", correct: false},
            {text: "Innovators", correct: false},
            {text: "Initiative", correct: true},
            {text: "Problem Solver", correct: false},
        ]
    },
    {
        question: "Conceive  new ideas and achieves innovative solution",
        answers: [
            {text: "Risk Takers", correct: false},
            {text: "Innovators", correct: false},
            {text: "Initiative", correct: false},
            {text: "Problem Solver", correct: true},
        ]
    },
    {
        question: "Can convince people to buy even if they don't want to",
        answers: [
            {text: "Proactive", correct: false},
            {text: "Persuasion", correct: true},
            {text: "Perseverance", correct: false},
            {text: "Planner", correct: false},
        ]
    },
    {
        question: "Must have a convincing power",
        answers: [
            {text: "Decisive", correct: false},
            {text: "Communicator", correct: true},
            {text: "Leader", correct: false},
            {text: "Opportunity Seeker", correct: false},
        ]
    },
    {
        question: "Must have the ability to be the first to see business chances",
        answers: [
            {text: "Decisive", correct: false},
            {text: "Communicator", correct: false},
            {text: "Leader", correct: false},
            {text: "Opportunity Seeker", correct: true},
        ]
    },
    {
        question: "Must be firm in making decisions",
        answers: [
            {text: "Decisive", correct: true},
            {text: "Communicator", correct: false},
            {text: "Leader", correct: false},
            {text: "Opportunity Seeker", correct: false},
        ]
    },
    {
        question: "Must have the charisma to be obeyed by his/her employees",
        answers: [
            {text: "Decisive", correct: false},
            {text: "Communicator", correct: false},
            {text: "Leader", correct: true},
            {text: "Opportunity Seeker", correct: false},
        ]
    },
    {
        question: "An entrepreneur who never runs out of ideas",
        answers: [
            {text: "Fabian Entrepreneurs", correct: false},
            {text: "Social Entrepreneurs", correct: false},
            {text: "Drone Entrepreneurs", correct: false},
            {text: "Innovative Entrepreneurs", correct: true},
        ]
    },
    {
        question: "Drive social innovation and transform",
        answers: [
            {text: "Fabian Entrepreneurs", correct: false},
            {text: "Social Entrepreneurs", correct: true},
            {text: "Drone Entrepreneurs", correct: false},
            {text: "Innovative Entrepreneurs", correct: false},
        ]
    },
    {
        question: "They are skeptical about changes ",
        answers: [
            {text: "Fabian Entrepreneurs", correct: true},
            {text: "Social Entrepreneurs", correct: false},
            {text: "Drone Entrepreneurs", correct: false},
            {text: "Innovative Entrepreneurs", correct: false},
        ]
    },
    {
        question: "They are conservative entrepreneurs",
        answers: [
            {text: "Fabian Entrepreneurs", correct: false},
            {text: "Social Entrepreneurs", correct: false},
            {text: "Drone Entrepreneurs", correct: true},
            {text: "Innovative Entrepreneurs", correct: false},
        ]
    },
    

]

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHtml = "Next";
    showQuestion();

}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ".  " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);

    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML =`Your score ${score} out of ${questions.length}`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});
startQuiz();