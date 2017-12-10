// psuedocode 
// define variables (!)
// assign numbers to HTML elements (!)
// on.click functions that add gem numbers to game number (!)
// set conditions for game (~)
// restart game (~)

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
    }
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
    var score = 0;
    $("#gamescore").html(score);
    $(".gem1").replace(randomGem1Number);
    $(".gem2").replace(randomGem2Number);
    $(".gem3").replace(randomGem3Number);
    $(".gem4").replace(randomGem4Number);
}

// game conditions
//function gameConditions () {
   // if ( score > randomGameNumber ) {
        //losses++;
        //$("#losses").html("Losses: "+ losses);   
    //}
    //else if (score === randomGameNumber) {
          
    //}
    //else {
        //do nothing
    //}
//}

initializeGame()
})