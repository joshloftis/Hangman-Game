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

//Randomly select word from gameWords
var selectedWord = gameWords[Math.floor(Math.random() * gameWords.length)];
console.log(selectedWord);

//User enters a letter
document.onkeyup = function(event) {
  var typedLetter = event.key;
  //print to the screen only *letters* the user types
  if (alphabet.indexOf(typedLetter) > -1) {
    //add typed *letter* to userGuesses array
    userGuesses.push(typedLetter);
    // If the letter typed is less than the 0 index of selectedWord (not a letter in the word),
    //then the remainingGuesses is decreased by 1, the new remainingGuesses value run, and
    //the incorrect letters are logged successively to the page
    if (selectedWord.indexOf(typedLetter) < 0) {
      remainingGuesses--;
      guesses.innerHTML = remainingGuesses;
      wrongLetters.textContent += typedLetter + " ";
    } else {
    }
  }
  //if remainingGuesses reaches 0 then an alert is run, and then reset the reset game function
  if (remainingGuesses === 0) {
    alert("YOU LOSE! The correct word, since you couldn't guess it, was " + selectedWord + ". Press \"OK\" to start again.");
    //resets game
  }
};
