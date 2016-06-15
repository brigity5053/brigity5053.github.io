$(document).ready(function(){
	var random_num = Math.floor((Math.random()*100) + 1);
	//create click event for submit button
var randomNumber = Math.floor(Math.random() * 100 ) + 1;

var guess = prompt('I am thinking of a random number between 1 and 100. What is it?');

if (parseInt(guess) === randomNumber ) {

  document.write('<p>You guessed the number!</p>');
  
}  else {


  document.write('<p>Sorry. The number was ' + randomNumber + '</p>');

}


	//create click event for clear button


});
