//create array of words
var artist = ["drake", "singer", "jcole"];

//Point Tracker
var wins = 0;
var losses = 0;
var guesses = 10;

//this displays the current scores on the page, before any changes are made.
document.getElementById("guess-count").innerHTML = guesses;
document.getElementById("win-count").innerHTML = wins;
document.getElementById("loss-count").innerHTML = losses;

//choose word randomly
var computerGuess = Math.floor(Math.random() * artist.length);
var computerChoice = artist[computerGuess];
var underScore = [];
var rightletter = [];
var wrongletter = [];
var lettersGuessed = [];
console.log(computerChoice);

//create underscores for length of word
var wordLength = (computerChoice.length);
console.log(wordLength);
function makeUnderscore() {
    for (var i = 0; i < computerChoice.length; i++) {
        underScore.push("_")
    }
    return underScore;
}
console.log(makeUnderscore());
//to add underscores in begining of game 
document.getElementById("underscores").innerHTML = underScore.join(" ");

//record user guess
document.onkeyup = function (event) {
    var userInput = event.key;
    //if the letter is in the word, we add the letter to "rightletter" array
    if (computerChoice.indexOf(userInput) > -1) {
        rightletter.push(userInput);
        //replace underscore with correct letter
        underScore[computerChoice.indexOf(userInput)] = userInput;
        console.log(underScore);
        if (underScore.join("") === computerChoice) {
            wins++;
            document.getElementById("win-count").textContent = wins;
        }
    }
    //if the letter is not in the word we add it to the "wrong letter" array 
    else {
        wrongletter.push(userInput);
        lettersGuessed.push(userInput);
        document.getElementById("letters-count").textContent = " " + lettersGuessed + " ";
        console.log(lettersGuessed);
        console.log(wrongletter);

        //this subtracts from the guesses number and adds loss if we run out!
        if (wrongletter.length + 1) {
            guesses--;
            document.getElementById("guess-count").textContent = guesses;
        }
        if (guesses === 0) {
            losses++;
            document.getElementById("loss-count").textContent = losses;
        }
    }
    //makes sure we update underscores with appropriate letters 

    document.getElementById("underscores").innerHTML = underScore.join(" ");
}