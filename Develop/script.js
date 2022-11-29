// Assignment Code
var generateBtn = document.querySelector("#generate");
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];  

var generatePassword = function () {
  var generatePassword = window.prompt("Please enter an 8 character Password.");
  // added windows prompt to alert users to enter a set amount character
  if (!generatePassword) {
    return;
  } 
  // added windows prompt to alert users to enter a lowercase, uppercase, numeric, and or special characters
  var index = Math.floor(Math.random() * numericCharacters.length);

  window.prompt("Please enter lowercase, uppercase, numeric, and or special characters");
  

};



// Write password to the #password input
function writePassword() {
var password = generatePassword();
var passwordText = document.querySelector("#password");
 
 passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



//var specialCharacters = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];
//var lowerCasedCharacters = ['a','b', 'c', 'd', 'e','f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w','x', 'y', 'z'];
//var upperCasedCharacters = ['A','B','C', 'D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
