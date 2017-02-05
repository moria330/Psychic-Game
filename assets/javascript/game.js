/*
Create an list of characters to guess -done
Create a Guess max count -done
Need to randomly choose a character -done
Create a place to store user character -done
Request a character from the user
Display players guessed characters
If not correct character decrease guessCountMax by 1
If guess correct character win.
If guessCount = guessCountMax lose. -done
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
//var illegalOptions = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "[", "]", "\"", ";", "'", ",", ".", "/", "`", "<", ">",
// "?", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", ":", "|", "{", "}", '"' ];

//document.addEventListener("DOMContentLoaded", function(event) {

	for (var i = 0; i < guessCountMax; i++) {
	
		//Get key input and convert to a lowercase letter
		document.onkeyup = function(event){
			letter =String.fromCharCode(event.keyCode).toLowerCase();
			console.log('this is letter: ' + letter);
			userGuess = letter;
		}
	console.log("userGuess is:" + userGuess);

	userGuessList.push(userGuess);
	console.log(userGuessList);


		//Win Condition
		if (userGuess === chosenOption) {
			winCount++;
			document.getElementById('win').append = winCount;
			alert("You guessed the correct letter!");
			reset();
		}

		//Loss Condition
		else if (guessCount === guessCountMax){
			lossCount++;
			document.getElementById('lose').append = lossCount;
			alert("You guessed too many wrong letters.");
			reset();
		}

		else if (userGuess !== chosenOption){
			guessCount++;
			console.log(guessCount);
			document.getElementById('guessesleft').innerHTML = (guessCountMax - guessCount);
		}
	}
//});

//Reset game but keep win lose counter

function reset() {
	guessCount = 0;
	chosenOption = choiceOptions[Math.round(Math.random() * (choiceOptions.length -1))];
	userGuessList = [];
	userGuess = "";

}