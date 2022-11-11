// Assignment code here

// User input variables: 
var enter;
var wantNumber;
var wantSpesh;
var wantUp;
var wantLow;
// Start Password variable values: 
// Special characters 
spesh = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", " < ", "=", " > ", " ? ", "@", "[", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
// Numeric characters
number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// Alphabetical characters
lowerC = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

upperC = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// Choices declared outside the if statement so they can be concatenated upon condition
var choices; 


var generateBtn = document.querySelector("#generate");

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }


  generateBtn.addEventListener("click", writePassword);



// Start function to generate password
function generatePassword() {
    enter = prompt("How many characters would you like your password? Choose between 8 and 128");
    // First if statement for user validation 
    if (!enter) {
        alert("This needs a value");
    } else if (enter < 8 || enter > 128) {
        enter = prompt("You must choose between 8 and 128");

    } else {
        // Continues once user input is validated
        wantNumber = confirm("Will this contain numbers?");
        wantSpesh = confirm("Will this contain special characters?");
        wantUp = confirm("Will this contain Uppercase letters?");
        wantLow = confirm("Will this contain Lowercase letters?");
    };

    // Else if for 4 negative options
    if (!wantSpesh && !wantNumber && !wantLow && !wantUp) {
        choices = alert("You must choose a criteria!");
    }
    // First if statement that uses user input prompts to determine choices
    // If all prompts value is true...
    else if (wantNumber && wantLow && wantSpesh && wantUp) {
        choices = spesh.concat(number, lowerC, upperC);
    }
    // Each set of three truths
    else if (wantNumber && wantSpesh && wantUp) {
        choices = spesh.concat(number, upperC);
    }
    else if (wantNumber && wantSpesh && wantLow) {
        choices = spesh.concat(number, lowerC);
    }
    else if (wantSpesh && wantLow && wantUp) {
        choices = spesh.concat(lowerC, upperC);
    }
    else if (wantLow && wantNumber && wantUp) {
        choices = number.concat(lowerC, upperC);
    }
    // Each set of two truths
    else if (wantSpesh && wantNumber) {
        choices = spesh.concat(number);

    } else if (wantSpesh&& wantLow) {
        choices = spesh.concat(lowerC);

    } else if (wantSpesh && wantUp) {
        choices = spesh.concat(upperC);
    }
    else if (wantLow && wantNumber) {
        choices = lowerC.concat(number);

    } else if (wantLow && wantUp) {
        choices = lowerC.concat(upperC);

    } else if (wantUp && wantNumber) {
        choices = number.concat(upperC);
    }
    // Each eingle truth
    else if (wantSpesh) {
        choices = spesh;
    }
    else if (wantNumber) {
        choices = number;
    }
    else if (wantLow) {
        choices = lowerC;
    }
    else if (wantUp) {
        choices = upperC;
    };

    var password = [];

   
    // Random selection for arrays
    for (var i = 0; i < enter; i++) {
        var pickChoices = choices[Math.floor(Math.random() * choices.length)];
        password.push(pickChoices);
    }
    // This joins the password array and converts it to a string
    var pw = password.join("");
    UserInput(pw);
    return pw;
}
// This puts the randomized string into the textbox
function UserInput(pw) {
    document.getElementById("password").textContent = pw;

}

