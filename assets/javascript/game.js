// Create array of possible words to guess
var possibleWords = ["peru", "china", "spain", "portugal", "canada", "iceland"]

// Create scoring variables and default values 
    // These will reset at the end of each round
    var remainingGuesses = 10;
    var letterBlanks = [];
    var lettersGuessed = [];
    // These will not reset at each round
    var wins = 0;
    var losses = 0;

// Other variables
    var isPlaying = false;
    var blanksInPlay;
    var usedLetters;
    var generatedWord = " ";

// event reference
    var userGuess = document.getElementById("letter").value;

// User presses key to start game
document.onkeyup = function(event) {
        userGuess = event.key;
        isPlaying = true;
    }

// Round begins and appropriate variables are reset to default
function startRound() {  
    if (isPlaying = true) {
    remainingGuesses = 10;
    letterBlanks = [];
    lettersGuessed = [];


// Generate random word to guess
generatedWord = possibleWords[Math.floor(Math.random() * possibleWords.length)];

// Create letter blanks for word in play using loop on generatedWord
for (var i = 0; i < generatedWord.length; i++) {
            letterBlanks.push("_");
        }
    
// Push letter blanks to html
    blanksInPlay = letterBlanks.join(" ");
    document.getElementById("wordInPlay").innerHTML = blanksInPlay;
    }
}

// Check if the letter guessed by the player is in the word in play
function checkGuess(userGuess){
    for (var i = 0; i < generatedWord.length; i++) {
        if (generatedWord[i] === userGuess) {
// If the letter matches a letter in the generated word, replace the letter bank with the letter            
            letterBlanks[i] === generatedWord[i];
    }
    }

    // Display used letters
    lettersGuessed.push(userGuess);
    document.getElementById("usedLetterDisplay").innerHTML = lettersGuessed.toString();

    remainingGuesses--;
    document.getElementById("guessesLeft").innerHTML = "Remaining Guesses: " + remainingGuesses;
    document.getElementById("wordInPlay").innerHTML = letterBlanks.textContent.join(" ");
    }

function gameOver() {
    if (generatedWord === letterBlanks.join(" ")){
        wins++;
        isPlaying = false;
        document.getElementById("wins").innerHTML = "Wins: " + wins;
        document.getElementById("gameEnd").innerHTML = "YOU WIN!!";
    }
    if (remainingGuesses === 0) {
        isPlaying = false;
        document.getElementById("gameEnd").innerHTML = "Better luck next time!"
    }
}







  



    // User continues to press keys until all letters are revealed and user wins (wins + 1) or remainingGuesses = 0

    // Game resets to all defaults with the exception of wins
    // Looped until all arrays in possibleWords display have been accessed




        






