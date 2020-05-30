// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(lenght) {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  var alpha = "abcdefghijklmnopqrstuvwxyz";
  var caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numeric = '0123456789';
  var punctuation = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
