//Words to choose from
var gameWords = ["horror", "fright", "terror", "hangman", "nosferatu", "dracula", "dread", "panic", "monster", "alarm", "scare", "afraid", "fear", "scare"];
//Informational vars
var remainingGuesses = 10;
var userGuesses = [];
var wins = 0;
var losses = 0;
var alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUV";
var guesses = document.getElementById('guesses-remaining');
var wrongLetters = document.getElementById('letters-guessed');

var selectedWord = gameWords[Math.floor(Math.random() * gameWords.length)];//Randomly select word from gameWords
console.log(selectedWord);

function dashes() {
  for (var i = 0; i < selectedWord.length; i++) {
    var currentWordSpan = document.getElementById('currentWord');
    currentWordSpan.innerHTML += "_";
  }
}

dashes();

document.onkeyup = function(event) {
  var typedLetter = event.key; //User enters a letter
  if (alphabet.indexOf(typedLetter) > -1) { //print to the screen only *letters* the user types
    userGuesses.push(typedLetter); //add typed *letter* to userGuesses array
    if (selectedWord.indexOf(typedLetter) < 0) { //If the user typed letter isn't a letter in the randomly selected word, then...
      remainingGuesses--; //Reduce remainingGuess by 1
      guesses.innerHTML = remainingGuesses; //Print new remainingGuesses count to div
      wrongLetters.textContent += typedLetter + " "; //Add the incorrect letters to the div
    } else if (selectedWord.indexOf(typedLetter) >= 0){
        console.log(typedLetter);
      }
    }
  if (remainingGuesses === 0) {   //if remainingGuesses reaches 0 then an alert is run, and then reset the reset game function
    alert("YOU LOSE! The correct word, since you couldn't guess it, was " + selectedWord + ". Press \"OK\" to start again.");
    //resets game
  }
};
