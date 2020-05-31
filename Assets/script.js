
// Application will generate a password with 8-128 chatacters based on user-selected criteria.

//Assignment Code + Event Listener to prompt questions when button pushed
document.querySelector("#generate").addEventListener("click", writePassword);

// Character's arrays
const alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const punctuation = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];

// Variable Declaration 
var confirmLength = "";
var confirmPunctuation;
var confirmNumeric;
var confirmalphaUpper;
var confirmalphaLower;

// Number of characters
function generatePassword() {
  var confirmLength = (prompt("How many characters do you wand to password to be?"));

  // Loop if answer is outside the parameters 
  while(confirmLength <= 7 || confirmLength >= 129) {
      alert("Password length must be between 8-128 characters Try again");
      var confirmLength = (prompt("How many characters do you wand to password to be?"));
      } 

      // Show number of characters 
      alert(`Your password will have ${confirmLength} characters`);

    // Determine parameters of password 
    var confirmPunctuation = confirm("Click OK to confirm if you need special characters");
    var confirmNumeric = confirm("Click OK to confirm if you need numeric characters");    
    var confirmalphaLower = confirm("Click OK to confirm if you need lowercase characters");
    var confirmALphaUpper = confirm("Click OK to confirm if you need uppercase characters");
      // Loop if answer is outside the parameters 
      while(confirmALphaUpper === false && confirmalphaLower === false && confirmPunctuation === f === false) {
        alert("You must choose at least one parameter");
        var confirmPunctuation = confirm("Click OK to confirm if you would like to include special characters");
 = confirm("Click OK to confirm if you would like to include numeric characters");    
        var confirmalphaLower = confirm("Click OK to confirm if you would like to include lowercase characters");
        var confirmALphaUpper = confirm("Click OK to confirm if you would like to include uppercase characters");   
    } 

     

  passwordText.value = password;
}