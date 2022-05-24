

//BUTTON//
function rollDice() {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

// console.log(randomNumber1);

var diceAttributeName = "images/dice" + randomNumber1 + ".png";

document.getElementById("img1").setAttribute("src", diceAttributeName);

var randomNumber2 = Math.floor(Math.random() * Math.floor(6))+1;

console.log(randomNumber2);

var diceAttributeName = "images/dice" + randomNumber2 + ".png";

document.getElementById("img2").setAttribute("src", diceAttributeName);

//who wins
var resultText;

if (randomNumber1 > randomNumber2) {
    resultText = "🚩Player one wins!";
}
else if (randomNumber1 < randomNumber2) {
    resultText = "Player two wins! 🚩";
}
else {
    resultText = "You are equal!";
}

document.getElementById("result").innerText = resultText;
}


//Solution
//var randomNumber1 = Math.floor(Math.random() * 6) + 1;
//var randomDiceImage = "dice" + randomNumber1 + ".png"; --dice1.png-dice6.png
//var randomImageSource = "images/" + randomDiceImage;
//document.querySelectorAll("img")[0]
//image1.setAttribute("src", "randomImageSource");
//var randomNumber2 = Math.floor(Math.random() * 6) + 1;
//var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
//document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

//if (randomNumber1 > randomNumber2) {
//     document.querySelector("h1").innerHTML = "Player 1 Wins!";
// }
//else if (randomNumber2 > randomNumber1) {
//     document.querySelector("h1").innerHTML = "Player 2 Wins!";
// }
// else {
//     document.querySelector("h1").innerHTML = "Draw!";
// }