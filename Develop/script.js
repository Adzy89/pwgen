// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(length) {
  var passwordText = document.querySelector("#password");
  var password = "1234";
  var Length = 8;
  passwordText.value = password;

  for ( var i=0; i< writePassword.length; i++) {
       passwordText.value +=  password.charAt(Math. floor(Math. random() * n)); 

  }
  console.log(writePassword);
  
  writePassword(8)

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function clickHandler(event) {
  console.log('Button Clicked');
}

