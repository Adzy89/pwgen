
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

//created statement for lowercase false value 
var lowerCase =  confirm (" Would you like to include lowercase letters ?" );

  if ( lowerCase === false ){
    alert("Please select 'OK' and try again");
    return;
  }

var upperCase = confirm (" Would you like to include UPPERCASE letters ?");

  if (upperCase === false ) {
    alert("Please select 'OK' and try again");
    return;
  }






}

