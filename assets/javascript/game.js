//Words to choose from
var gameWords = ["horror", "fright", "terror", "hangman", "nosferatu", "dracula", "dread", "panic", "monster", "alarm", "scare", "afraid", "fear", "scare"];
//Informational vars
var remainingGuesses = 10;
var lettersGuessed= [];
var wins = 0;
var losses = 0;
var alphabet = "abcdefghijklmnopqrstuv";

//Randomly select word from gameWords
var selectedWord = gameWords[Math.floor(Math.random() * gameWords.length)];

for (var i = 0; i < selectedWord.length; i++) {
  var currentWordSpan = document.getElementById('currentWord');
  currentWordSpan.textContent = selectedWord;
  console.log(currentWordSpan);
}

console.log(selectedWord);


//User entering letters
document.onkeyup = function(event) {
  var userGuess = event.key;
  console.log(userGuess);
};
