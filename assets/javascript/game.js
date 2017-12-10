// psuedocode 
// define variables (!)
// assign numbers to HTML elements (!)
// on.click functions that add gem numbers to game number (!)
// set conditions for game (~)
// restart game (~)

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
// setting up to start the game
function initializeGame () {

// starting game number, wins, losses, gem values
    $("#gamenumber").html(randomGameNumber);
    $("#wins").html("Wins: " + wins);
    $("#losses").html("Losses: "+ losses);
    $("#gamescore").html(score);
    $(".gem1").append(randomGem1Number);
    $(".gem2").append(randomGem2Number);
    $(".gem3").append(randomGem3Number);
    $(".gem4").append(randomGem4Number);
}

// add an on click listener for the gems, add random gem number to score
$(".gem1").click(function(){
    score += randomGem1Number;
    $("#gamescore").html(score);
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
})

$(".gem2").click(function(){
    score += randomGem2Number;
    $("#gamescore").html(score);

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
})

$(".gem3").click(function(){
    score += randomGem3Number;
    $("#gamescore").html(score);
    
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
})

$(".gem4").click(function(){
    score += randomGem4Number;
    $("#gamescore").html(score);

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
})

// reset function
function reset () {
    // regenerate random game number
    var randomGameNumber = randomNumberFromRange(19, 120);
    $("#gamenumber").html(randomGameNumber);

    // reset score to zero
    var score = 0;
    $("#gamescore").html(score);

    $(".gem1").val(randomGem1Number);
    $(".gem2").val(randomGem2Number);
    $(".gem3").val(randomGem3Number);
    $(".gem4").val(randomGem4Number);
}

initializeGame()
});

// try putting everything in reset