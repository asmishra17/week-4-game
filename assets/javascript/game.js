// psuedocode 
// define variables
// assign numbers to HTML elements
// on.click functions that add gem numbers to game number
// set conditions for game
// restart game 

$(document).ready(function() {

// define global variables
var randomGameNumber = randomNumberFromRange(19, 120);
var randomGem1Number = randomNumberFromRange(1, 12); 
var randomGem2Number = randomNumberFromRange(1, 12); 
var randomGem3Number = randomNumberFromRange(1, 12); 
var randomGem4Number = randomNumberFromRange(1, 12); 
var score = 0;
var wins = 0; 
var losses = 0;

// function to generate randomNumber for game and gems
function randomNumberFromRange(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

// start the game
function initializeGame () {

// starting game number, wins, losses, gem values
    $("#gamenumber").html(randomGameNumber);
    $("#wins").html("Wins: " + wins);
    $("#losses").html("Losses: "+ losses);
    $("#gamescore").html(score);
    $(".gem1").appendto(randomGem1Number);
    $(".gem2").appendto(randomGem2Number);
    $(".gem3").appendto(randomGem3Number);
    $(".gem4").appendto(randomGem4Number);
}

// add an on click listener for the gems, add random gem number to score

$(".gem1").click(function(){
    score += randomGem1Number;
    $("#gamescore").html(score);
})

$(".gem2").click(function(){
    score += randomGem2Number;
    $("#gamescore").html(score);
})

$(".gem3").click(function(){
    score += randomGem3Number;
    $("#gamescore").html(score);
})

$(".gem4").click(function(){
    score += randomGem4Number;
    $("#gamescore").html(score);
})

// reset function
function reset () {
    $("#gamenumber").html(randomGameNumber);
    $("#gamescore").html(score);
    $(".gem1").appendto(randomGem1Number);
    $(".gem2").appendto(randomGem2Number);
    $(".gem3").appendto(randomGem3Number);
    $(".gem4").appendto(randomGem4Number);
}
// game conditions

function gameConditions () {
if (randomGameNumber > score) {
    losses++;
    $("#losses").html("Losses: "+ losses);
    reset();
}
else if (randomGameNumber === score) {
    wins++;
    $("#wins").html("Wins: " + wins);
    // create reset function
}
else {
    //do nothing
}
}

initializeGame()
})