const words = [
    'byte',
    'maze',
    'hashim',
    'javascript',
    'html',
    'css',
    'python',
    'java',
    'csharp',
    'typescript',
    'ruby',
    'swift',
    'kotlin',
    'tesla',
    'ferrari',
    'lamborghini',
    'porsche',
    'bugatti'
];

const wordElement = document.getElementById('word');
const inputElement = document.getElementById('input');
const messageElement = document.getElementById('message');
const scoreElement = document.getElementById('score');

let currentWord;
let score = 0;

// Initialize game
function init() {
    // Clear input
    inputElement.value = '';
    // Get a random word
    currentWord = getRandomWord();
    // Display the word
    displayWord(currentWord);
}

// Generate random word from array
function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
}

// Display word in DOM
function displayWord(word) {
    wordElement.textContent = word;
}

// Check input word
function checkInput() {
    if (inputElement.value.toLowerCase() === currentWord) {
        // Word is correct
        score++;
        scoreElement.textContent = score;
        messageElement.textContent = 'Correct! Next word:';
        setTimeout(() => {
            messageElement.textContent = '';
            init();
        }, 1000);
    } else {
        // Word is incorrect
        messageElement.textContent = 'Incorrect, try again!';
    }
}

// Event listener for input
inputElement.addEventListener('input', () => {
    checkInput();
});

// Start game
init();
