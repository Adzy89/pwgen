
var generateBtn = document.querySelector("#generate");
var symbols = [ '@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.' ];
var numbers = ['0123456789'];
var lowerCharacters = [ 'abcdefghijklmnopqrstuvwxyz' ];
var upperCharacters = [ 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' ];


var characters = []

function generatePassword(){
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
//created statement for uppercase false value 
var upperCase = confirm (" Would you like to include UPPERCASE letters ?");

  if (upperCase === false ) {
    alert("Please select 'OK' and try again");
    return;
  }
//created statement for numberscase  false value 
  var numbersCase = confirm (" Would you like to include numbers ?");

  if (numbersCase === false){
    alert("Please select 'OK' and try again");
    return;
  } 
//created statement for symbolcase false value 
  var symbolCase =  confirm (" Would you like to include special characters ?");
  
  if (symbolCase === false){
    alert("Please select 'OK' and try again");
    return;
  }

  var passwordInput = '';
//created true statements 
  if (lowerCase === true) {
    characters.push(lowerCharacters)
    console.log(lowerCase) 
  }
  
  if (upperCase === true){
    characters.push(upperCharacters)
    console.log(upperCase)
  }
  
  if (numbersCase === true){
    characters.push(numbers)
    console.log(numbersCase)
  }
  
  if (symbolCase === true){
    characters.push(symbols)
    console.log(symbolCase)
  } 
//calling the characters array to join the string together 
var passwordGen = characters.join('')
  console.log(passwordGen)
//randomly geneterating characters to create pw
for (var i=0; i < passwordLength; i++) {
  passwordInput += passwordGen.charAt(Math.floor(Math.random() * passwordGen.length));
  console.log(passwordInput);
}
//calling the password function
  writePassword(passwordInput);
}
// caling the function to display password in text area
function writePassword(text) {
  var passwordText = document.getElementById("password");
  passwordText.value = text;  
}
  
// created event listener for "click function"
generateBtn.addEventListener("click", generatePassword);



