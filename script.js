
var generateBtn = document.querySelector("#generate");



function generatePassword() {
  var lowercaseArray= ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercaseArray= ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numberArray= ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specialArray= ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "=", "+"];

 var passwordArray= [];
 var userArray= [];

lowercaseArray [1]

 var passwordLength= prompt("Choose how many characters between 8 and 128");
if (passwordLength < 8){
  alert("Password must contain more than 7 characters!");
return "";
}

if (passwordLength >128) {
  alert ("Password must contain less than 128 characters!");
  return "";
}

 var lowercase = confirm ("Would you like to use lower case letters in your password?");
  if (lowercase){
    passwordArray = passwordArray.concat(lowercaseArray);
  }

  var uppercase = confirm ("Would you like to use upper case letters in your password?");
  if (uppercase){
    passwordArray = passwordArray.concat(uppercaseArray);
  }
  var numbers = confirm ("Would you like to use numbers in your password?");
  if (numbers){
    passwordArray = passwordArray.concat(numberArray);
  }
  var special = confirm ("Would you like to use special characters in your password?");
  if (special){
    passwordArray = passwordArray.concat(specialArray);
  }
  console.log(passwordArray)

for (var i = 0; i < passwordLength; i++) {
  userArray.push (passwordArray[Math.floor(Math.random() * passwordArray.length)]);
}
return userArray.join("");
}
  
  
  function writePassword () {
 var password = generatePassword ();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }
  
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
