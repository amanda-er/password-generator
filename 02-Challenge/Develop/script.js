// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


function generatePassword() {
  var userChoice = prompt('Choose a password with a length of at least 8 and no more than 128 characters');
  var includeUpperCase = window.confirm('Do you want uppercase characters?');
  var includeLowerCase = window.confirm('Do you want lowercase characters?');
  var includeNumbers = window.confirm('Do you want numbers?');
  var includeSpecialCara = window.confirm('Do you want special characters?');
  let selectedPassword = [];


  if (userChoice >= 8 && userChoice <= 128) {
    while (selectedPassword.length < userChoice) {
      if (includeLowerCase) {
        selectedPassword += genRanLower();
       // console.log(selectedPassword)
      } else { selectedPassword; }
      if (includeNumbers) {
        selectedPassword += genRanNum();
       // console.log(selectedPassword)
      } else { selectedPassword; }
      if (includeSpecialCara) {
        selectedPassword += genRanSpec();
      //  console.log(selectedPassword)
      } else { selectedPassword; }
      if (includeUpperCase) {
        selectedPassword += genRanUpper();
       // console.log(selectedPassword)
      } else { selectedPassword; }
    } window.alert('Here is your generated password  ' + selectedPassword)
  } else { window.alert('Oh no!!! Please select a valid password length to proceed!!') }
  //if (userChoice >= 8 && userChoice <= 128)
  return selectedPassword;

}


function genRanSpec() {
  var specialNum = ['!', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '{', '}', '~'];
  return specialNum[Math.floor(Math.random() * specialNum.length)];
}


function genRanLower() {
  var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  return lowerCase[Math.floor(Math.random() * lowerCase.length)];
}


function genRanNum() {
  var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  return numbers[Math.floor(Math.random() * numbers.length)];
}


function genRanUpper() {
  var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  return upperCase[Math.floor(Math.random() * upperCase.length)];
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


