// Assignment Code
var generateBtn = document.querySelector("#generate");
// A special tool well save for later :)
var validated = false;
// bunch of arrays that hold different chars
var uppercaseChars = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var numChars = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialChars = [
  "`",
  "?",
  "|",
  "-",
  "_",
  "=",
  "+",
  "*",
  "!",
  ",",
  ".",
  "~",
  "&",
  "$",
  "#",
  "@",
];
// lowercase chars are the minimum so the validChars starts with them in there
var validChars = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//initial prompt for the password length
var passLength = prompt(
  "Please choose a password length betwene 8 and 128 charecters long.",
  "Password Length"
);
//if the password length is outside acceptable values it sticks here till it is
if (passLength > 128 || passLength < 8) {
  while (validated == false) {
    passLength = prompt(
      "You must choose a password length betwene 8 and 128 charecters long.",
      "Password Length"
    );
    if (passLength <= 128 && passLength >= 8) {
      validated = true;
    }
  }
}
// check to see if we use uppercaseChars array
var useAllUper = confirm(
  "Is it ok to include upercase characters in your password?"
);
// check to see if we use numChars array
var useAllNum = confirm("Is it ok to include numbers in your password?");
// check to see if we use specialChars array
var useAllSpecial = confirm(
  "Is it ok to include special characters in your password?"
);
// if we use uppercaseChars then it gets added here
if (useAllUper === true) {
  for (i = 0; i < uppercaseChars.length; i++) {
    validChars.push(uppercaseChars[i]);
  }
}
// if we use numChars then it gets added here
if (useAllNum === true) {
  for (i = 0; i < numChars.length; i++) {
    validChars.push(numChars[i]);
  }
}
// if we use specialChars then it gets added here
if (useAllSpecial === true) {
  for (i = 0; i < specialChars.length; i++) {
    validChars.push(specialChars[i]);
  }
}
// selects a random char from validChars and adds it into the pass string which gets returned
function generatePassword() {
  var pass = "";
  for (i = 1; i <= passLength; i++) {
    pass += validChars[Math.floor(Math.random() * validChars.length)];
  }
  return pass;
}
