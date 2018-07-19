// Create array of possible words to guess
var possibleWords = ["peru", "china", "spain", "portugal", "canada", "iceland"]

// Generate random word to guess
var generatedWord = possibleWords[Math.floor(Math.random() * possibleWords.length)];


// Create scoring variables and default values 
    // These will reset at the end of each round
    var remainingGuesses = 10;
    var lettersGuessed = [];
    var letterBlanks = [];
    // These will not reset at each round
    var wins = 0;

// Other variables
    var isPlaying = false;
    var blanksInPlay;
    var usedLetters;


// Player presses key generate letter blanks for guessing
document.onkeyup = function(event) {
    for (var i = 0; i < generatedWord.length; i++) {
        letterBlanks[i] = "_";
    }
    blanksInPlay = letterBlanks.join(" ");
    document.getElementById("wordInPlay").innerHTML = blanksInPlay;

}
function recordGuess() {

    // Record letters guessed by player, saves to variable, and pushes to lettersGuessed array
    var userGuess = document.getElementById("letter").value;
    
    // Make sure a letter is input
    if (userGuess.length > 0) {
    for (var i = 0; i < generatedWord.length; i++) {
        // if the generated word contains a letter the user guessed, assign it to userGuess
        if (generatedWord[i] === userGuess) {
            letterBlanks[i] = userGuess;
    }
    }
    // Display used letters
    lettersGuessed.push(userGuess);
    document.getElementById("usedLetterDisplay").innerHTML = lettersGuessed.toString();

    remainingGuesses--;
    document.getElementById("guessesLeft").innerHTML = "Remaining Guesses: " + remainingGuesses;
    document.getElementById("wordInPlay").innerHTML = letterBlanks.join(" ");
    }
    if (remainingGuesses = 0) {
        

    }
}





  



    // User continues to press keys until all letters are revealed and user wins (wins + 1) or remainingGuesses = 0

    // Game resets to all defaults with the exception of wins
    // Looped until all arrays in possibleWords display have been accessed




        






