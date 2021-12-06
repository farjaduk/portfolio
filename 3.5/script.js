// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChar = "0123456789";
var specialChar = "!@#$%^&*()_-+={}[];:'`~<,>.?/|"
var length;
var upper;
var number;
var Symbol;

//Function used to determine the length of the password
function getCharacterLength(){
  length = prompt("Choose a length for Your Secure Password. Must be at least 8 characters and no longer than 128 characters.");

    if (length < 8){
      alert("Choose characters between 8 and 128. Try Again");
      getCharacterLength();
    }else if (length > 128){
      alert("Choose characters between 8 and 128. Try Again");
      getCharacterLength();
    }else if (isNaN(length)){
      alert("Choose characters between 8 and 128. Try Again");
      getCharacterLength();
    }else{
    alert("The next three alerts will let you decide the types of characters you would like to be include in your password. If no types are chosen, then you will automatically generate a password with lowercase letters.");
    }
    return length;
}

//Function used to determine whether the user wants to include uppercase characters in the password
function getRandomUpper(){
  upper = prompt("Do you want to include uppercase letters in your password? YES or NO?");
    upper = upper.toLowerCase();

    if (upper === null || upper=== ""){
      alert("Please answer Yes or No.");
      getRandomUpper();

    }else if (upper === "yes" || upper ==="y"){
      upper = true;
      return upper;

    }else if (upper === "no" || upper ==="n"){
      upper = false;
      return upper;
    
    }else {
      alert("Please answer Yes or No.");
      getRandomUpper();
    }
    return upper;
}

//Function used to determine whether the user wants to include numbers in the password
function getRandomNumber(){
  number = prompt("Do you want to include numbers in your password? YES or NO?");
    number = number.toLowerCase();

    if (numberCheck === null || numberCheck === ""){
      alert("Please answer Yes or No");
      getRandomNumber();

    }else if (number === "yes" || number ==="y"){
      number = true;
      return number;

    }else if (number === "no" || number ==="n"){
      number = false;
      return number;
    
    }else {
      alert("Please answer Yes or No");
      getRandomNumber();
    }
    return number;
}

//Function used to determine whether the user wants to include special characters in the password
function getRandomSymbol(){
  Symbol = prompt("Do you want to include special characters in your password? YES or NO");
    Symbol = Symbol.toLowerCase();

    if (Symbol=== null || Symbol === ""){
      alert("Please answer Yes or No.");
      getRandomSymbol();

    }else if (Symbol === "yes" || Symbol ==="y"){
      Symbol = true;
      return Symbol;

    }else if (Symbol === "no" || Symbol ==="n"){
      Symbol = false;
      return Symbol;
    
    }else {
      alert("Please answer Yes or No");
      getRandomSymbol();
    }
    return Symbol;
}

 //Function used to take all the input from the previous functions and generate a password using a random number generator and 
 //the charAt method 
function generatePassword(){
  getCharacterLength();
  console.log(length);
  getRandomUpper();
  console.log(upper);
  getra();
  console.log(number);
  getRandomSymbol();
  console.log(Symbol);

var characters = lowercaseChar;
var password = "";
if (upper && number && Symbol){
  characters += uppercaseChar + numberChar + specialChar;

}else if (upper && number){
  characters += uppercaseChar + numberChar;

}else if (number && Symbol){
  characters += numberChar + specialChar;

}else if (upper && Symbol){
  characters += uppercaseChar + specialChar;

}else if (upper){
  characters += uppercaseChar;

}else if(number){
  characters += numberChar;

}else if (Symbol){
  characters += specialChar;

}else{
  characters === lowercaseChar;
}

  for(var i = 0; i < length; i++){
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var password1 = "";
  password1 = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password1;
}

// function resetText(){
//   document.getElementById("password").value = "Your Secure Password";
// }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
