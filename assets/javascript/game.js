//create array of words
var artist = ["drake", "chance", "jcole"];

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

//Adds underscores in begining of game 
document.getElementById("underscores").innerHTML = underScore.join(" ");

//record user guess
document.onkeyup = function (event) {
    var userInput = event.key;
    //if the letter is in the word, we add the letter to "rightletter" array
    if (computerChoice.indexOf(userInput) > -1) {
        rightletter.push(userInput);

        //replace underscore with correct letter
        underScore[computerChoice.indexOf(userInput)] = userInput;

        if (underScore.join("") === computerChoice && computerChoice === "drake") {
            document.getElementById("cover").src = "assets/images/Drake.jpg";
            wins++;
            document.getElementById("win-count").textContent = wins;
        }
        else if (underScore.join("") === computerChoice && computerChoice === "jcole") {
            document.getElementById("cover").src = "assets/images/Jcole.jpg";
            wins++;
            document.getElementById("win-count").textContent = wins;
        }
        else if (underScore.join("") === computerChoice && computerChoice === "Chance") {
            document.getElementById("cover").src = "assets/images/Chance.jpg";
            wins++;
            document.getElementById("win-count").textContent = wins;
        }
    }
    //if the letter is not in the word we add it to the "wrong letter" array and we make sure we do not repeat used words 
    else if (computerChoice.indexOf(userInput) < 0 && wrongletter.indexOf(userInput) < 0){
        wrongletter.push(userInput);
        lettersGuessed.push(userInput);
        guesses--;
        document.getElementById("guess-count").textContent = guesses;
        document.getElementById("letters-count").textContent = lettersGuessed;

        if (guesses === 0) {
            losses++;
            document.getElementById("loss-count").textContent = losses;
        }

    }
    //makes sure we update underscores with appropriate letters 
    document.getElementById("underscores").innerHTML = underScore.join(" ");
}