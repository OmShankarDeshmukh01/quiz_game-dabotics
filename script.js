// Define quiz questions
const quizQuestions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Rome"],
        answer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Mars", "Jupiter", "Mercury"],
        answer: "Mars"
    },
    // Add more questions as needed
];

// Function to load quiz questions
function loadQuiz() {
    const quizContainer = document.getElementById('quiz');
    let quizHTML = '';

    quizQuestions.forEach((question, index) => {
        quizHTML += `
            <div class="question">
                <p>${index + 1}. ${question.question}</p>
                <ul>
                    ${question.options.map(option => `<li><input type="radio" name="question${index}" value="${option}">${option}</li>`).join('')}
                </ul>
            </div>
        `;
    });

    quizContainer.innerHTML = quizHTML;
}

loadQuiz();




// Function to calculate score
function calculateScore() {
    let score = 0;

    quizQuestions.forEach((question, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption) {
            if (selectedOption.value === question.answer) {
                score++;
            }
        }
    });

    return score;
}

// Function to show result
function showResult() {
    const score = calculateScore();
    const resultContainer = document.getElementById('result');

    if (score >= 2) { // Threshold for winning
        resultContainer.innerHTML = "<h2>Congratulations! You are a winner!</h2><img src='win.gif'>";
    } else {
        resultContainer.innerHTML = "<h2>Sorry! You didn't win this time.</h2><img src='lose.gif'>";
    }
}

// Event listener for submit button
document.getElementById('submitBtn').addEventListener('click', showResult);

