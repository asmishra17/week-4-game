$(document).ready(function() {

// define global variables
var randomGameNumber = randomNumberFromRange(19, 120); // generate random game number
var randomGem1Number = randomNumberFromRange(1, 13); // generates random gem numbers
var randomGem2Number = randomNumberFromRange(1, 12); // I made them odd and even to be fair!
var randomGem3Number = randomNumberFromRange(1, 13); 
var randomGem4Number = randomNumberFromRange(1, 12); 
var score = 0; // player score
var wins = 0; // player wins
var losses = 0; //player losses

// function to generate randomNumber within range for game and gems
function randomNumberFromRange(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

// function that outlines game rules
function gameConditions () {
    if (score > randomGameNumber) {
        losses++;
        $("#losses").html("Losses: "+ losses);
        displayAlertLoss();
        setTimeout(reset, 1500);

    } 
    else if (score === randomGameNumber) {
        wins++;
        $("#wins").html("Wins: " + wins);
        displayAlertWin();
        setTimeout(reset, 1500);
    }
    else {
        // do nothing
    }
}
// setting up to start the game
function initializeGame () {

// starting game number, wins, losses
    $(".alert").hide();
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

// function to display alert
function displayAlertWin () {
    $(".alert").text("YOU WON!"); 
    $(".alert").show();
}

function displayAlertLoss () {
    $(".alert").text("YOU LOST! :(");
    $(".alert").show();
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
    //hide alert
    $(".alert").hide();

    // regenerate random game number
    randomGameNumber = randomNumberFromRange(19, 120);
    $("#gamenumber").html(randomGameNumber);

    // reset score to zero
    score = 0;
    
    $("#gamescore").html(score);
    // reset gem numbers
    randomGem1Number = randomNumberFromRange(1, 13); // try using just randomGem1Number()
    randomGem2Number = randomNumberFromRange(1, 12); 
    randomGem3Number = randomNumberFromRange(1, 13); 
    randomGem4Number = randomNumberFromRange(1, 12);
}

initializeGame()
});

