// Application will generate a password with 8-128 chatacters based on user-selected criteria.

// Assignment Code
document.querySelector("#generate").addEventListener("click", writePassword);

// Character's arrays
const alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const punctuation = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];

// Variable Declaration 
const confirmLength = "";

// Number of characters
function generatePassword() {
  const confirmLength = (prompt("How long should the password be?"));

// Loop for characters between 8 and 128
  while(confirmLength <= 7 || confirmLength >= 129) {
      alert("The password must be between 8-128 characters.");
      const confirmLength = (prompt("How many characters do you want the password to have?"));
      } 
console.log

// Show number of characters 
      alert(`The password will have ${confirmLength} characters.`);

// Password booleans
    var confirmAlphaUpper = confirm("Do you need uppercase letters?");
    var confirmalphaLower = confirm("Do you need lowercase letters?");
    var confirmNumeric = confirm("Do you need numeric characters?"); 
    var confirmPunctuation = confirm("Do you need special characters?");
      

// Loops for characters
var passwordCharacters = []

if (confirmAlphaUpper) {
  passwordCharacters = passwordCharacters.concat(alphaUpper)
}
if (confirmalphaLower) {
  passwordCharacters = passwordCharacters.concat(alphaLower)
}   
if (confirmNumeric) {
  passwordCharacters = passwordCharacters.concat(numeric)
}
if (confirmPunctuation) {
  passwordCharacters = passwordCharacters.concat(punctuation)
}

  var randomPassword = ""
  
  for (var i = 0; i < confirmLength; i++) {
    randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
    console.log(randomPassword)
  }
  return randomPassword;
}
// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
  
   passwordText.value = password;
 }