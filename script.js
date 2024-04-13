const questions = [
    {
        question: "What year was our college founded1?",
        options: ["1850", "1900", "1950"],
        answer: "1900",
    },
    {
        question: "Who is the college's current mascot2?",
        options: ["Eagles", "Owls", "Lions"],
        answer: "Owls",
    },
    {
        question: "Who is the college's current mascot3?",
        options: ["Eagles", "Owls", "Lions"],
        answer: "Owls",
    },
    {
        question: "What year was our college founded4?",
        options: ["1850", "1900", "1950"],
        answer: "1900",
    },
    {
        question: "What year was our college founded5?",
        options: ["1850", "1900", "1950"],
        answer: "1900",
    },
    {
        question: "What year was our college founded6?",
        options: ["1850", "1900", "1950"],
        answer: "1900",
    },
    // Add more questions here
];
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const submitBtn = document.getElementById('submit-btn');
const feedback = document.getElementById('feedback');

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    //console.log(currentQuestion);
    const currentQ = questions[currentQuestion];
    //console.log(currentQ);
    questionText.textContent = currentQ.question;
    optionsContainer.innerHTML = '';
    currentQ.options.forEach(option => {
        const btn = document.createElement('button');
        btn.textContent = option;
        //console.log(option);
        btn.classList.add('option-btn');
        btn.addEventListener('click', () => checkAnswer(option));
        optionsContainer.appendChild(btn);
    });
}

async function checkAnswer(selected) {
    //console.log("Hello 123");
    const currentQ = questions[currentQuestion];
    return new Promise((resolve, reject) => {
        if (selected === currentQ.answer) {
            showFeedback("Correct!", true);
            score++;
        } else {
            showFeedback(`Incorrect! The correct answer is: ${currentQ.answer}`, false);
        }
        //setTimeout(() => resolve(), 1000);
        //resolve();
    });
    // if (selected === currentQ.answer) {
    //     showFeedback("Correct!", true);
    //     score++;
    // } else {
    //     showFeedback(`Incorrect! The correct answer is: ${currentQ.answer}`, false);
    // }
}

// function showFeedback(message, isCorrect) {
//     feedback.textContent = message;
//     feedback.className = "feedback"; // Reset feedback class
//     feedback.classList.add(isCorrect ? 'text-success' : 'text-danger');
//     feedback.classList.add('feedback-slide');
//     setTimeout(() => {
//         feedback.classList.remove('feedback-slide');
//         feedback.textContent = ''; // Clear feedback message
//         nextQuestion();
//     }, 1000); // Proceed to next question after 1 second
// }
function showFeedback(message, isCorrect) {
    feedback.textContent = message;
    feedback.className = "feedback"; // Reset feedback class
    feedback.classList.add(isCorrect ? 'text-success' : 'text-danger');
    feedback.classList.add('feedback-slide');
    //console.log(message);
    //submitBtn.disabled = true; // Disable submit button until feedback is shown
}

submitBtn.addEventListener('click', async () => {
    // console.log(feedback.textContent);
    // feedback.classList.remove('feedback-slide');
    // feedback.textContent = ''; // Clear feedback message
    // //submitBtn.disabled = false; // Enable submit button
    // nextQuestion();
    if (feedback.textContent !== '') {
        console.log(feedback.textContent);
        feedback.classList.remove('feedback-slide');
        feedback.textContent = '';
        //submitBtn.disabled = true; // Disable submit button
        await checkAnswer(); // Wait for the answer to be checked
        //submitBtn.disabled = false;
         // Clear feedback message
        //submitBtn.disabled = false; // Enable submit button
        nextQuestion();
    }
});



function nextQuestion() {
    currentQuestion++;
    //console.log(currentQuestion);
    if (currentQuestion < questions.length) {
        //console.log(currentQuestion);
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    questionText.textContent = `Quiz Completed! You scored ${score} out of ${questions.length}.`;
    optionsContainer.innerHTML = '';
    submitBtn.style.display = 'none';
    feedback.textContent = '';
}

submitBtn.addEventListener('click', () => {
    if(currentQuestion < questions.length) {
        nextQuestion();
    }
});

loadQuestion();
