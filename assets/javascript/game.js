// 
$(document).ready(function() {

// define global variables. I made some gems odd and some even, so the game would be more fair!
var randomGameNumber = randomNumberFromRange(19, 120);
var randomGem1Number = randomNumberFromRange(1, 13); 
var randomGem2Number = randomNumberFromRange(1, 12); 
var randomGem3Number = randomNumberFromRange(1, 13); 
var randomGem4Number = randomNumberFromRange(1, 12); 
var score = 0;
var wins = 0; 
var losses = 0;

// function to generate randomNumber within range for game and gems
function randomNumberFromRange(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

// function that outlines game rules
function gameConditions () {
    if (score > randomGameNumber) {
        losses++;
        $("#losses").html("Losses: "+ losses);
        reset()
    } 
    else if (score === randomGameNumber) {
        wins++;
        $("#wins").html("Wins: " + wins);
        reset()
    }
    else {
        // do nothing
    }
}
// setting up to start the game
function initializeGame () {

// starting game number, wins, losses
    $("#gamenumber").html(randomGameNumber);
    $("#wins").html("Wins: " + wins);
    $("#losses").html("Losses: "+ losses);
    $("#gamescore").html(score);
    // below is not needed...
    //$(".firstnumber").append(randomGem1Number);
    //$(".secondnumber").append(randomGem2Number);
    //$(".thirdnumber").append(randomGem3Number);
    //$(".fourthnumber").append(randomGem4Number);
}

// add an on click listener for the gems, add random gem number to score
$(".gem1").click(function(){
    score += randomGem1Number;
    $("#gamescore").html(score);
    
    gameConditions()
})

$(".gem2").click(function(){
    score += randomGem2Number;
    $("#gamescore").html(score);

    gameConditions()
})

$(".gem3").click(function(){
    score += randomGem3Number;
    $("#gamescore").html(score);
    
    gameConditions()
})

$(".gem4").click(function(){
    score += randomGem4Number;
    $("#gamescore").html(score);

    gameConditions()
})

// reset function



score = 0;

function reset () {
    // regenerate random game number
    randomGameNumber = randomNumberFromRange(19, 120);
    $("#gamenumber").html(randomGameNumber);
    // reset score to zero
    score = 0;
    $("#gamescore").html(score);
    // reset gem numbers
    randomGem1Number = randomNumberFromRange(1, 13); 
    randomGem2Number = randomNumberFromRange(1, 12); 
    randomGem3Number = randomNumberFromRange(1, 13); 
    randomGem4Number = randomNumberFromRange(1, 12);
}

initializeGame()
});

