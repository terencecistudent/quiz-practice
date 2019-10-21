const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submutButton = document.getElementById("submit");

/*-----------------------------------------------My Questions-----*/
const myQuestions = [
    {
        question: "Which Premier League team has one the most trophies in history?",
        answers: {
            a: "Arsenal",
            b: "Chelsea",
            c: "Liverpool",
            d: "Manchester United"
        },
        correctAnswer: "d"
    },
    {
        question: "Which keeper has kept the most clean sheets in Premier League history?",
        answers: {
            a: "David James",
            b: "Mark Schwarzer",
            c: "Petr Cech",
            d: "David Seaman"
        },
        correctAnswer: "c"
    },
    {
        question: "Who has scored the most Premier League goals?",
        answers: {
            a: "Wayne Rooney",
            b: "Alan Shearer",
            c: "Frank Lampard",
            d: "Andy Cole"
        },
        correctAnswer: "b"
    },
    {
        question: "Which player has the most Premier League assists?",
        answers: {
            a: "Ryan Giggs",
            b: "Wayne Rooney",
            c: "Cesc Fabregas",
            d: "Frank Lampard"
        },
        correctAnswer: "a"
    }
];


/*---------------------------------------------------Make Quiz------*/
function makeQuiz() {
    const output = [];

    // For each question:
    myQuestions.forEach(
        (currentQuestion, questionNumber) => {
            // We'll want to store the list of answer choices:
            const answers = [];

            // and for each available answer:
            for(letter in currentQuestion.answers) {
                // add an HTML radio button:
                answers.push(
                    `<label>
                        <input type="radio" name="question${questionNumber}" value="${letter}">
                        ${letter} :
                        ${currentQuestion.answers[letter]}
                    </label>`
                );
            }

            // add this question and its answer to the output:
            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
                <div class="answers"> ${answers.join('')} </div>`
            );
        }
    );

    // combine our output list onto one string of HTML and put it on the page:
    quizContainer.innerHTML =  output.join("");
}


/*----------------------------------------------Show Results-----*/
function showResults() {
    // gather answer containers from our quiz:
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers:
    let numCorrect = 0;

    // for each question:
    myQuestions.forEach((currentQuestion, questionNumber) => {
        // find selected answer:
        const answerContainer = answerContainers[questionNumber];
        const selector = 'input[name=question'+questionNumber+']:checked';
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        // if answer is correct:
        if(userAnswer===currentQuestion.correctAnswer){
            // add to the number of correct answers;
            numCorrect++;

            // color the answers green
            answerContainers[questionNumber].style.color = 'lightgreen';
            }
            // if answer is wrong or blank
            else{
            // color the answers red
            answerContainers[questionNumber].style.color = 'red';
            }
        });

        // show number of correct answers out of total
        resultsContainer.innerHTML = numCorrect + ' out of ' + myQuestions.length;
}

makeQuiz();