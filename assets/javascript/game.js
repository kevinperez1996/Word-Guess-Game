
//create array of words
var artist = ["drake", "chance", "jcole", "kanye", "jayz", "kendrick", "bigsean", "migos",
    "logic", "50cent", "eminem", "cardi", "meek", "gambino", "nicki"];

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
    makeUnderscore();
}
reset();


//record user guess
document.onkeyup = function (event) {
    var userInput = event.key;
    for (j = 0; j < computerChoice.length; j++) {
        //if the letter is in the word, we add the letter to "rightletter" array
        if (computerChoice.indexOf(userInput) > -1 && userInput === computerChoice[j]) {
            rightletter.push(userInput);
            //replace underscore with correct letter
            underScore[j] = userInput;
            document.getElementById("underscores").innerHTML = underScore.join("");
        }
    }
    if (underScore.join("") === computerChoice && computerChoice === "drake") {
        document.getElementById("cover").src = "assets/images/drake.jpg";
        var audio = new Audio('assets/audio/drake.mov');
        audio.play();
        document.getElementById("song-name").innerHTML = "Drake - Gold Roses";
        wins++;
        document.getElementById("win-count").textContent = wins;

    }
    else if (underScore.join("") === computerChoice && computerChoice === "jcole") {
        document.getElementById("cover").src = "assets/images/jcole.jpg";
        wins++;
        var audio = new Audio('assets/audio/jcole.mov');
        audio.play();
        var audio = "";
        document.getElementById("song-name").innerHTML = "Jcole - High for Hours";
        document.getElementById("win-count").textContent = wins;
    }
    else if (underScore.join("") === computerChoice && computerChoice === "kanye") {
        document.getElementById("cover").src = "assets/images/kanye.jpg";
        wins++;
        var audio = new Audio('assets/audio/kanye.mov');
        audio.play();
        var audio = "";
        document.getElementById("song-name").innerHTML = "Kanye - XTCY";
        document.getElementById("win-count").textContent = wins;
    }
    else if (underScore.join("") === computerChoice && computerChoice === "jayz") {
        document.getElementById("cover").src = "assets/images/jayz.jpg";
        wins++;
        var audio = new Audio('assets/audio/jayz.mov');
        audio.play();
        var audio = "";
        document.getElementById("song-name").innerHTML = "Jay-Z - Top Off";
        document.getElementById("win-count").textContent = wins;
    }
    else if (underScore.join("") === computerChoice && computerChoice === "kendrick") {
        document.getElementById("cover").src = "assets/images/kendrick.jpg";
        wins++;
        var audio = new Audio('assets/audio/kendrick.mov');
        audio.play();
        var audio = "";
        document.getElementById("song-name").innerHTML = "Kendrick Lamar  - Black Friday";
        document.getElementById("win-count").textContent = wins;
    }
    else if (underScore.join("") === computerChoice && computerChoice === "bigsean") {
        document.getElementById("cover").src = "assets/images/bigsean.jpg";
        wins++;
        var audio = new Audio('assets/audio/bigsean.mov');
        audio.play();
        var audio = "";
        document.getElementById("song-name").innerHTML = "Big Sean - Overtime";
        document.getElementById("win-count").textContent = wins;
    }
    else if (underScore.join("") === computerChoice && computerChoice === "migos") {
        document.getElementById("cover").src = "assets/images/migos.jpg";
        wins++;
        var audio = new Audio('assets/audio/migos.mov');
        audio.play();
        var audio = "";
        document.getElementById("song-name").innerHTML = "Migos - No Cap";
        document.getElementById("win-count").textContent = wins;
    }
    else if (underScore.join("") === computerChoice && computerChoice === "logic") {
        document.getElementById("cover").src = "assets/images/logic.jpg";
        wins++;
        var audio = new Audio('assets/audio/logic.mov');
        audio.play();
        var audio = "";
        document.getElementById("song-name").innerHTML = "Logic - Wassup";
        document.getElementById("win-count").textContent = wins;
    }
    else if (underScore.join("") === computerChoice && computerChoice === "50cent") {
        document.getElementById("cover").src = "assets/images/50cent.jpg";
        wins++;
        var audio = new Audio('assets/audio/50cent.mov');
        audio.play();
        var audio = "";
        document.getElementById("song-name").innerHTML = "50 Cent - Crazy";
        document.getElementById("win-count").textContent = wins;
    }
    else if (underScore.join("") === computerChoice && computerChoice === "eminem") {
        document.getElementById("cover").src = "assets/images/eminem.jpg";
        wins++;
        var audio = new Audio('assets/audio/eminem.mov');
        audio.play();
        var audio = "";
        document.getElementById("song-name").innerHTML = "Eminem - Killshot";
        document.getElementById("win-count").textContent = wins;
    }
    else if (underScore.join("") === computerChoice && computerChoice === "cardi") {
        document.getElementById("cover").src = "assets/images/cardi.jpg";
        wins++;
        var audio = new Audio('assets/audio/cardi.mov');
        audio.play();
        var audio = "";
        document.getElementById("song-name").innerHTML = "Cardi B - I Like It";
        document.getElementById("win-count").textContent = wins;
    }
    else if (underScore.join("") === computerChoice && computerChoice === "meek") {
        document.getElementById("cover").src = "assets/images/meek.jpg";
        wins++;
        var audio = new Audio('assets/audio/meek.mov');
        audio.play();
        var audio = "";
        document.getElementById("song-name").innerHTML = "Meek Mill - Key to the Streets";
        document.getElementById("win-count").textContent = wins;
    }
    else if (underScore.join("") === computerChoice && computerChoice === "gambino") {
        document.getElementById("cover").src = "assets/images/gambino.jpg";
        wins++;
        var audio = new Audio('assets/audio/gambino.mov');
        audio.play();
        var audio = "";
        document.getElementById("song-name").innerHTML = "Childish Gambino - Waiting for my Moment";
        document.getElementById("win-count").textContent = wins;
    }
    else if (underScore.join("") === computerChoice && computerChoice === "nicki") {
        document.getElementById("cover").src = "assets/images/nicki.jpg";
        wins++;
        var audio = new Audio('assets/audio/nicki.mov');
        audio.play();
        var audio = "";
        document.getElementById("song-name").innerHTML = "Nicki Minaj - Megatron";
        document.getElementById("win-count").textContent = wins;
    }
    else if (underScore.join("") === computerChoice && computerChoice === "chance") {
        document.getElementById("cover").src = "assets/images/chance.jpg";
        wins++;
        var audio = new Audio('assets/audio/chance.mov');
        audio.play();
        var audio = "";
        document.getElementById("song-name").innerHTML = "Chance the Rapper - The First Time";
        document.getElementById("win-count").textContent = wins;
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
        reset();
    }
    if (underScore.join("") === computerChoice) {
        document.getElementById("letters-count").innerHTML = "";
        reset();
    }
}
