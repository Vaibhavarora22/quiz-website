// Quiz data (replace with your questions and answers)
const questions = [
    {
        question: "What year was our college founded?",
        answers: ["1850", "1900", "1950"],
        correctAnswer: 1,
    },
    {
        question: "Who is the college's current mascot?",
        answers: ["Eagles", "Owls", "Lions"],
        correctAnswer: 2,
    },
    // Add more questions here
];

let currentQuestion = 0;
let score = 0;

function displayQuestion() {
    const quizContainer = document.getElementById("quiz-container");
    quizContainer.innerHTML = ""; // Clear previous question

    const questionElement = document.createElement("h2");
    questionElement.classList.add("")
};
