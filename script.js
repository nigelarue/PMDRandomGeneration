// Variables for setting password
// Button variable
var genBtn = document.querySelector("#generate");
// Available characters to use for generating password 
var psswrdCharacters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()+-_";
// Password length
var passwordLength = 8;
var password = "";

// Add event listener to generate button
genBtn.addEventListener("click", genPassword);


// Write function to generate password upond click event

function genPassword() {
  var psswrdCharacters =
    "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var passwordLength = 12;
  var password = "";
  for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * psswrdCharacters.length);
    password += psswrdCharacters.substring(randomNumber, randomNumber + 1);
  }
  // query selector to pull from HTML
  document.getElementById("password").value = password;

  for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * psswrdCharacters.length);
    password += psswrdCharacters.substring(randomNumber, randomNumber + 1);
  }
  return password;
}