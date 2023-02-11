var genBtn = document.querySelector("#generate");

genBtn.addEventListener("click", genPassword);

function genPassword() {
  var passwordLength = parseInt(prompt("Enter the password length (8-128):"));

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Invalid password length. Please enter a number between 8 and 128.");
    return;
  }

  var includeLowercase = prompt("Include lowercase characters? (yes/no)");
  if (includeLowercase === "yes") {
    includeLowercase = true;
  } else {
    includeLowercase = false;
  }

  var includeUppercase = prompt("Include uppercase characters? (yes/no)");
  if (includeUppercase === "yes") {
    includeUppercase = true;
  } else {
    includeUppercase = false;
  }

  var includeNumeric = prompt("Include numeric characters? (yes/no)");
  if (includeNumeric === "yes") {
    includeNumeric = true;
  } else {
    includeNumeric = false;
  }

  var includeSpecial = prompt("Include special characters? (yes/no)");
  if (includeSpecial === "yes") {
    includeSpecial = true;
  } else {
    includeSpecial = false;
  }

  var psswrdCharacters = "";
  if (includeLowercase) {
    psswrdCharacters += "abcdefghijklmnopqrstuvwxyz";
  }
  if (includeUppercase) {
    psswrdCharacters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (includeNumeric) {
    psswrdCharacters += "0123456789";
  }
  if (includeSpecial) {
    psswrdCharacters += "!@#$%^&*()+-_";
  }

  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * psswrdCharacters.length);
    password += psswrdCharacters.substring(randomNumber, randomNumber + 1);
  }

  document.getElementById("password").value = password;
}
