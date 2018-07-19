// Create arrays of letters for each word to be guessed
var word1 = ["p", "e", "r", "u"]
var word2 = ["c", "h", "i", "n", "a"]
var word3 = ["s", "p", "a", "i", "n"]
var word4 = ["p", "o", "r", "t", "u", "g", "a", "l"]
var word5 = ["c", "a", "n", "a", "d", "a"]
var word6 = ["i", "c", "e", "l", "a", "n", "d"]
var possibleWords = [word1, word2, word3, word4, word5, word6]

// Create scoring variables and default values 
    // These will reset at the end of each round
    var remainingGuesses = 10;
    var lettersGuessed = []
    // These will not reset at each round
    var wins = 0;

// This function begins the game
document.onload = function(event) {

    // Event begins game upon page load
   
    // Function randomly chooses a word array from the possibleWords array

    // Create variable to hold game HTML. Game should start with default values:   
        //Word Display - use randomly chosen word array length to generate HTML display of "_" for each letter
        //lettersGuessed - blank
        //remainingGuesses - 10
        //wins - 0
                
    // Set inner HTML contents of the #game div to html variable


    // Main game code runs when user presses a letter key

    // If the letter equals a value in the array, update Word Display in inner HTML from "_" to letter and add letter to lettersGuessed
    // If the letter does not equal a value in the array, add letter to lettersGuessed and decrement remainingGuesses by 1

    // User continues to press keys until all letters are revealed and user wins (wins + 1) or remainingGuesses = 0

    // Game resets to all defaults with the exception of wins
    // Looped until all arrays in possibleWords display have been accessed




        


}



