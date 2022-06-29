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
          bigPw = bigPw + uCase;
        }
        var wantNum = confirm("Hit OK if you would you like your password to include numbers.");
        if (wantNum === true) {
          bigPw = bigPw + numbers;
        }
        var wantSpec = confirm("Hit OK if you wuld you like your password to include special characters.");
        if (wantUpper === true) {
          bigPw = bigPw + specialChars;
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
  console.log(bigPw);
  console.log(bigPw.length);

  generatePassword(bigPw, passArray);
 
  var rando = Math.floor(Math.random() * bigPw.length);

  console.log(passArray);
  console.log("random number " + rando);
  console.log(passArray[rando]);
  console.log(finalPw);
  passwordText.value = finalPw;  //output generated password to text box
}

function randomGenerator(bigPw, passArray){
  return passArray[Math.floor(Math.random() * bigPw.length)]; //generates random number to select character in the array
}

function generatePassword(bigPw, passArray){
var finalPw = '';
  for(var i = 0; i > bigPw.length; i++){    //for loop to add individual characaters to finalPw var
    finalPw += randomGenerator(bigPw, passArray);
  }
return finalPw;
}

generateBtn.addEventListener("click", writePassword); //click the button to run function writePassword