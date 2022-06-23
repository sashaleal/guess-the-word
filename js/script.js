//Create Global Variables
const guessedLettersElement = document.querySelector(".guessed-letters");
const guessLetterButton = document.querySelector(".guess");
const letterInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuessesElement = document.querySelector(".remaining");
const remainingGuessesSpan = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const playAgainButton = document.querySelector(".play-again hide");

const word = "magnolia";

//Write a Function to Add Placeholders for Each Letter
const placeholder = function(word){
    const placeholderLetters=[]; 
    for(const letter of word){
        console.log(letter);
        placeholderLetters.push("●");
    }
    wordsInProgress.innerText = placeholderLetters.join("");
};

placeholder(word);

//Add an Event Listener for the Button
guessLetterButton.addEventListener("click", function (e){
    e.preventDefault();
    const guess = letterInput.value;
    consolelog(guess);
    letterInput.value = "";
});


