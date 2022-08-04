// Assignment Code
var generateBtn = document.querySelector("#generate");

function randomInt(min, max) {
  if (!max) {
    max = min
    min = 0
  }
  var rand = Math.random()
  return Math.floor(min*(1 - rand) + rand*max)
}

function getRandomItem(list) {
  return list [randomInt(list.length)]
}

function generatePassword() {

  while (true) {

    var userInput = window.prompt("How long do you want your password to be?")
    
    // User Exited the Prompt //
    if (userInput === null) {
      return
    }
    
    var passwordLength = parseInt(userInput)
    
    if (isNaN(passwordLength)) {
      window.alert("Please Enter a Number!")
  } else if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Invalid password length. Length Should be between 8 and 128 characters.")
  } else {
    break
  }

}

  var userWantsNumbers = window.confirm("Would you like to include numbers in your password?")
  var userWantsSymbols = window.confirm("Would you like to include symbols in your password?")
  var userWantsLowercase = window.confirm("Would you like to include lowercase letters in your password?")
  var userWantsUppercase = window.confirm("Would you like to include uppercase letters in your password?")

  var numberlist = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  var symbollist = ["!", "@", "#", "$", "%", "&", "*"]
  var lowercaselist = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var uppercaselist = []

  var optionsCart = []

  for (var i = 0; i < lowercaselist.length; i++) {
    uppercaselist = lowercaselist[i].toUpperCase()
  }

  if (userWantsNumbers === true) {
    optionsCart.push(numberlist)
  }

  if (userWantsSymbols === true) {
    optionsCart.push(symbollist)
  }

  if (userWantsLowercase === true) {
    optionsCart.push(lowercaselist)
  }

  if (userWantsUppercase === true) {
    optionsCart.push(uppercaselist)
  }

  if (optionsCart.length === 0) {
    optionsCart.push(lowercaseList)
  }

  var generatePassword = ""

  for (var i = 0; i < passwordLength; i++) {
    var randomList = getRandomItem(optionsCart)
    var randomChar = getRandomItem(randomList)
    generatePassword += randomChar
  }

  return generatePassword

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if (!password) return

  if (password) {
    passwordText.value = password;
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
