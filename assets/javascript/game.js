/*
Create an list of characters to guess
Create a Guess max count
Need to randomly choose a character
Create a place to store user character
Request a character from the user
Display players guessed characters
If not correct character decrease guessCountMax by 1
If guess correct character win.
If guessCount >= guessCountMax lose.
If win increase win counter by 1 and display win to player
If lose increase loss counter by 1 and display loss to player
After win or lose reset game
Reset the guessCountMax, the userGuessList, the userGuess, and randomly pick a new character
*/

//Game Variables
var winCount = 0;
var lossCount = 0;
var guessCount = 0;
var guessCountMax = 10;
var userGuess = "";
var userGuessList = [];
var choiceOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var chosenOption = choiceOptions[Math.round(Math.random() * (choiceOptions.length -1))];
var illegalOptions = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "[", "]", \, ";", "'", ",", ".", "/", "`", "<", ">",
 "?", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", ":", "|", "{", "}", '"' ];

