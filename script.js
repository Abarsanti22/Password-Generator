// Assignment Code
var generateBtn = document.querySelector("generate");



function generatePassword() {
  var lowercaseArray= ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercaseArray= ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numberArray= ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specialArray= ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "=", "+"];

 var passwordArray= [];
 var userArray= [];

 var passwordLength= prompt("Choose how many characters between 8 and 128");
 var lowercase = confirm ("Would you like to use lower case letters in your password?");
 var uppercase = confirm ("Would you like to use upper case letters in your password?");
 var numbers = confirm ("Would you like to use numbers in your password?");
 var special = confirm ("Would you like to use special characters in your password?");

 if (passwordLength < 8 && passwordLength > 128) {
 }
else {
alert ("Please enter a number between 8 and 128!");
}

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}







// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
