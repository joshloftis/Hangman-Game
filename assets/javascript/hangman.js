//var for Words
var gameWords = ["horror", "fright", "terror", "hangman", "nosferatu", "dracula", "dread", "panic", "monster", "alarm", "scare", "afraid", "fear", "scare"];
// var to store word randomly selected by algorithm
var wordSelected = gameWords[Math.floor(Math.random() * gameWords.length)];
//var for word underscores
var underscores = [];
// var for storing underscores
var store = "";
// var for number of times user has won
var wins = 0;
// var for number of times user has lost
var losses = 0;
// var for letters guessed
var guessedLetter = [];
// var for wrongly guessed letters
var wrongLetter = "";
// var for correctly guessed letters
var rightLetter = "";
// var for number of guesses
var guessesRemaining = 10;
// var for acceptable characters
var alphabet = "abcdefghijklmnopqrstuvwxyz";

//Function that (re)starts game
function gameGo() {
  wordSelected = gameWords[Math.floor(Math.random() * gameWords.length)];
  console.log(wordSelected);
  guessesRemaining = 10;
  underscores = [];
  store = "";
  wrongLetter = "";
  rightLetter = "";
  toUnderscores();
}

//Function to turn random word into underscores
function toUnderscores() {
  for (var i = 0; i < wordSelected.length; i++) {
    underscores[i] = "_";
  }
  store = underscores.join(" ");
  document.getElementById('currentWord').innerHTML = store;
}
toUnderscores();

//Function for game logic
document.onkeyup = function(event) {
  //Evaluate typed key
  guessedLetter = event.key.toLowerCase();
    //If typed character is a match in the alphabet
    if (alphabet.indexOf(guessedLetter) > -1) {
      //If letter matches letter in selected word
      if (wordSelected.indexOf(guessedLetter) > -1) {
        //Add letter to correct letter area and replace underscores with letter
        for (var i = 0; i < wordSelected.length; i++) {
          if (wordSelected[i] === guessedLetter) {
            underscores[i] = guessedLetter;
          }
        }
        document.getElementById('currentWord').innerHTML = underscores.join(" ");
      //If letter doesn't match letter in selected word
      } else {
      //Add letter to wrongLetters var
      if (wrongLetter.indexOf(guessedLetter) > -1) {
        return false;
      } else {
        wrongLetter = wrongLetter + " " + guessedLetter;
      }
      //Decrease number of remaining guesses
      guessesRemaining--;
      //Update guesses remaining count visible to user
      var guessesSpan = document.getElementById('guesses-remaining');
      guessesSpan.innerHTML = guessesRemaining;
      //Add letter to wrong letter area
      var wrongSpan = document.getElementById('letters-guessed-wrong');
      wrongSpan.innerHTML = wrongLetter;
      }
    }
    //If user guesses all the correct letters
    if (underscores.join('') == wordSelected) {
      alert("Boo! Ha ha. Gotcha. You win! Click \"Ok\" to play again.");
      wins++;
      var winsSpan = document.getElementById('wins');
      winsSpan.innerHTML = wins;
      //function to reset game
      gameGo();
    }
    //If remainingGuesses gets to zero
    if (guessesRemaining == 0) {
    //game ends
    alert("Ohh, looks like you couldn't guess the right word. Was it really that hard? Well, since you're dumb, here's the right word: \"" + wordSelected + "\". Feel free to try again. And maybe this time actually try...");
    //increase wins/losses
    losses++;
    var lossesSpan = document.getElementById('losses');
    lossesSpan.innerHTML = losses;
    gameGo();
  }
};
document.getElementById('reset-game').addEventListener('click', function() {
  gameGo();
});
