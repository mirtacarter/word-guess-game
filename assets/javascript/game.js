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
    var isPlaying = true;
    var blanksInPlay;
    var usedLetters;

// Generate random word to guess
var generatedWord = possibleWords[Math.floor(Math.random() * possibleWords.length)];

// User presses key to start game
document.onkeyup = function(event) {
    var playGame = event.key;

// Create letter blanks for word in play using loop on generatedWord
for (var i = 0; i < generatedWord.length; i++) {
            letterBlanks.push("_");
        }
    
// Push letter blanks to html
    blanksInPlay = letterBlanks.join(" ");
    document.getElementById("wordInPlay").innerHTML = blanksInPlay;
}


// Check if the letter guessed by the player is in the word in play
function checkGuess(){
    var userGuess = document.getElementById("letter").value;

    for (var i = 0; i < generatedWord.length; i++) {
        if (generatedWord[i] === userGuess) {
// If the letter matches a letter in the generated word, replace the letter bank with the letter            
            letterBlanks[i] == userGuess;
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




        






