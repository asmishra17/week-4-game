$(document).ready(function() {

// define global variables
var randomGameNumber = randomNumberFromRange(19, 120); // generate random game number
var randomSnack1Number = randomNumberFromRange(1, 12); // generates random snack numbers
var randomSnack2Number = randomNumberFromRange(1, 12); 
var randomSnack3Number = randomNumberFromRange(1, 12); 
var randomSnack4Number = randomNumberFromRange(1, 12); 
var score = 0; // player score
var wins = 0; // player wins
var losses = 0; //player losses

// state all functions

// generate randomNumber within range for game and snacks
function randomNumberFromRange(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

// setting up to start the game
function initializeGame () {
    
        $(".alert").hide();
        $("#gamenumber").html(randomGameNumber);
        $("#wins").html("Wins: " + wins);
        $("#losses").html("Losses: "+ losses);
        $("#gamescore").html(score);
    }

// outline game rules
function gameConditions () {
    if (score > randomGameNumber) {
        losses++;
        $("#losses").html("Losses: "+ losses);
        displayAlertLoss();
        setTimeout(reset, 2000);
    } 
    else if (score === randomGameNumber) {
        wins++;
        $("#wins").html("Wins: " + wins);
        displayAlertWin();
        setTimeout(reset, 2000);
    }
    else {
        // do nothing
    }
}

// win or loss alert
function displayAlertWin () {
    $(".alert").text("YOU WON"); 
    $(".alert").show();
}

function displayAlertLoss () {
    $(".alert").text("YOU LOST");
    $(".alert").show();
}

// add an on click listener for the snacks, add random snack number to score
$(".snack1").click(function(){
    score += randomSnack1Number;
    $("#gamescore").html(score);
    
    gameConditions()
})

$(".snack2").click(function(){
    score += randomSnack2Number;
    $("#gamescore").html(score);

    gameConditions()
})

$(".snack3").click(function(){
    score += randomSnack3Number;
    $("#gamescore").html(score);
    
    gameConditions()
})

$(".snack4").click(function(){
    score += randomSnack4Number;
    $("#gamescore").html(score);

    gameConditions()
})

// reset function

function reset () {
    // hide alert
    $(".alert").hide();

    // regenerate random game number...ask about this at some point
    randomGameNumber = randomNumberFromRange(19, 120);
    $("#gamenumber").html(randomGameNumber);

    // reset score to zero
    score = 0;
    
    $("#gamescore").html(score);
    // reset gem numbers
    randomSnack1Number = randomNumberFromRange(1, 12); // try using just randomGem1Number()
    randomSnack2Number = randomNumberFromRange(1, 12); 
    randomSnack3Number = randomNumberFromRange(1, 12); 
    randomSnack4Number = randomNumberFromRange(1, 12);
}

initializeGame()
});

