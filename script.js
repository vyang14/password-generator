var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password")

var lCase = "abcdefghijklmnopqrstuvwxyz";
var uCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890";
var specialChars = " !#$%&'()*+,-./:;<=>?@^_`{|}~"
var pwLength;

function writePassword() { //user input prompts
    var bigPw = lCase;
    pwLength = prompt("How long would you like your password to be?\n8 through 128 characters.");
    if (pwLength >= 8 && pwLength <= 128){
      var wantUpper = confirm("Hit OK if you would you like your password to include upper case characters.");
        if (wantUpper === true) {
          bigPw = bigPw + uCase; //adds upper case letters to character pool
        }
        var wantNum = confirm("Hit OK if you would you like your password to include numbers.");
        if (wantNum === true) {
          bigPw = bigPw + numbers; //adds numbers to character pool
        }
        var wantSpec = confirm("Hit OK if you wuld you like your password to include special characters.");
        if (wantSpec === true) {
          bigPw = bigPw + specialChars; //adds special characters to character pool
        }
        passArray = bigPw.split('');        
    } else { //in case user inputs invalid entry
    pwLength = 0;
    window.alert("Invalid entry. Please press OK and try again.");
    writePassword();
    return pwLength;
    }

  console.log("Password Length: " + pwLength);
  console.log("Uppercase: " + wantUpper);
  console.log("Numbers: " + wantNum);
  console.log("Special Characters: " + wantSpec);  
  console.log("Character pool: " + bigPw);
  console.log("Total number of characters in pool: " + bigPw.length);
  console.log("Character pool array: " + passArray);

  generatePassword(bigPw, passArray); 
}

function randomGenerator(bigPw, passArray){
  return passArray[Math.floor(Math.random() * bigPw.length)]; //generates random number to select character in the array
}

function generatePassword(bigPw, passArray){
var finalPw = '';
  for(var i = 0; i < pwLength; i++){    //for loop to add individual characaters to finalPw var
    finalPw += randomGenerator(bigPw, passArray);
    console.log("generatePassword has run");
  }
console.log("Final password: " + finalPw);
console.log("Length of final password: " + finalPw.length)
passwordText.value = finalPw //output generated password to text box
return;

}

generateBtn.addEventListener("click", writePassword); //click the button to run function writePassword