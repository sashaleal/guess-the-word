//Create Global Variables
const guessedLettersElement = document.querySelector(".guessed-letters");
const guessLetterButton = document.querySelector(".guess");
const letterInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuessesElement = document.querySelector(".remaining");
const remainingGuessesSpan = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const playAgainButton = document.querySelector(".play-again");

const word = "magnolia";
const guessedLetters = [];

//Write a Function to Add Placeholders for Each Letter
const placeholder = function (word) {
    const placeholderLetters = []; 
    for (const letter of word) {
        console.log(letter);
        placeholderLetters.push("●");
    }
    wordInProgress.innerText = placeholderLetters.join("");
};

placeholder(word);


//Add an Event Listener for the Button
guessLetterButton.addEventListener("click", function (e){
    e.preventDefault();
      // Empty message paragraph
  message.innerText = "";
    const guess = letterInput.value;
    console.log(guess);
    
    const goodGuess = validateInput(guess);
    if(goodGuess){
        makeGuess(guess);
    }
    letterInput.value = "";
});

//Create a Function to Check Player’s Input
const validateInput = function (input) {
    const acceptedLetter = /[a-zA-Z]/;
      // Is the input empty?
    if (input.length === 0) {
        message.innerText = "Please enter a letter";
         // Did you type more than one letter?
    } else if (input.length > 1) {
        message.innerText ="Please enter a single letter";
        // Did you type a number, a special character or some other non letter thing?
    } else if (!input.match(acceptedLetter)) {
        message.innerText = "Please enter a letter from A to Z"
        // We finally got a single letter, omg yay
    } else {
        return input;
    }
};

const makeGuess = function(guess){
    guess = guess.toUpperCase();
    //does it contain that letter?
    if (guessedLetters.includes(guess)) {
    message.innerText = "You already got that letter, babe";
    } else {
        guessedLetters.push(guess);
        console.log(guessedLetters);
        showGuessedLetters();
        updateWordInProgress(guessedLetters);
    }
    });

//Create a Function to Show the Guessed Letters
    const showGuessedLetters = function (){
        guessedLettersElement.innerText ="";
        for(const letter of guessedLetters){
            const li = document.createElement("li");
            li.innerText = letter;
            guessedLettersElement.append(li);
        }
    };

    //Create a Function to Update the Word in Progress
    const updateWordInProcess = function (guessedLetters){
        const wordUpper = word.toLocaleUpperCase;
        const wordArray = wordUpper.split("");
        const revealWord = [];
    for (const letter of wordArray) {
      if (guessedLetters.includes(letter)) {
        revealWord.push(letter.toUpperCase());
      } else {
        revealWord.push("●");
      }
    }
    // console.log(revealWord);
    wordInProgress.innerText = revealWord.join("");
    checkIfWin();
  };
  
  const checkIfWin = function () {
    if (word.toUpperCase() === wordInProgress.innerText) {
      message.classList.add("win");
      message.innerHTML = `<p class="highlight">You guessed the correct word! Congrats!</p>`;
    }
  };