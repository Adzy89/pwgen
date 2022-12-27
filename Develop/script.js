
var generateBtn = document.querySelector("#generate");
var symbols = [ '@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.' ];
var numbers = ['0123456789'];
var lowerCharacters = [ 'abcdefghijklmnopqrstuvwxyz' ];
var upperCharacters = [ 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' ];


var characters = []

function generatePassword(){
  console.log("button clicked");
  var passwordLength = parseInt(window.prompt("Please select between 8 & 128 Characters"));

//created statement to determine if the pw is less ten 8 char or higher 
  if (passwordLength < 8 || passwordLength > 128 ) {
    alert("Please enter a valid Number")
  return;
  }
}

