
//create array of words
var artist = ["drake", "chane", "jcole"];

//Point Tracker
var wins = 0;
var losses = 0;
var guesses = [];
var underScore = [];
var rightletter = [];
var wrongletter = [];
var lettersGuessed = [];
var computerGuess = Math.floor(Math.random() * artist.length);
var computerChoice = artist[computerGuess];

function reset() {

    //this displays the current scores on the page, before any changes are made.
    document.getElementById("guess-count").innerHTML = 10;
    document.getElementById("win-count").innerHTML = wins;
    document.getElementById("loss-count").innerHTML = losses;

    
    //choose word randomly
    computerGuess = Math.floor(Math.random() * artist.length);
    computerChoice = artist[computerGuess];
    underScore = [];
    rightletter = [];
    wrongletter = [];
    lettersGuessed = [];
    guesses = 10;
    console.log(computerChoice);
    
    //create underscores for length of word
    var wordLength = (computerChoice.length);
    function makeUnderscore() {
        for (var i = 0; i < computerChoice.length; i++) {
            underScore.push("_")
            //Adds underscores in begining of game 
             document.getElementById("underscores").innerHTML = underScore.join(" ");
        }
        return underScore;
    }
    console.log(makeUnderscore());
}
reset();


//record user guess
document.onkeyup = function (event) {
    var userInput = event.key;

    //if the letter is in the word, we add the letter to "rightletter" array
    if (computerChoice.indexOf(userInput) > -1) {
        rightletter.push(userInput);

        //replace underscore with correct letter
        underScore[computerChoice.indexOf(userInput)] = userInput;
        document.getElementById("underscores").innerHTML = underScore.join("");

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
        else if (underScore.join("") === computerChoice && computerChoice === "chane") {
            document.getElementById("cover").src = "assets/images/Chance.jpg";
            wins++;
            document.getElementById("win-count").textContent = wins;
        }
    }
    //if the letter is not in the word we add it to the "wrong letter" array and we make sure we do not repeat used words 
    else if (computerChoice.indexOf(userInput) < 0 && wrongletter.indexOf(userInput) < 0) {
        wrongletter.push(userInput);
        lettersGuessed.push(userInput);
        guesses--;
        document.getElementById("guess-count").textContent = guesses;
        document.getElementById("letters-count").textContent = lettersGuessed;

    }
    if (guesses === 0) {
        losses++;
        document.getElementById("loss-count").textContent = losses;
        document.getElementById("letters-count").innerHTML = "";
        //document.getElementById("guess-count").innerHTML = 10;
        reset();
    }
    if (underScore.join("") === computerChoice) {
        document.getElementById("letters-count").innerHTML = "";
        //document.getElementById("guess-count").inneHTML = 10;
        reset();
    }
}