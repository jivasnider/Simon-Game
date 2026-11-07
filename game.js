var userClickedEvent = [];

var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];

//starter
var level = 0;
var keyPressed = false;


$(document).keydown(function(){
  if (keyPressed === false){
    nextSequence();
    keyPressed = true;
    console.log(keyPressed)

  } 
})

function nextSequence() {

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

   $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100); 
  level = level + 1;
  $("h1").text("Level "+level);
  playSound(randomChosenColour);
  console.log(userClickedEvent);
  console.log(gamePattern);
}


$(".btn").click(handler);

function handler () {
  var userChosenColor = this.id;
  userClickedEvent.push(userChosenColor);
  playSound(userChosenColor);
  animatePress(userChosenColor);

  if (userClickedEvent.length===gamePattern.length) {
    checker();
  }

}


function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}


function animatePress(currentColor) {
  $("#"+currentColor).addClass("pressed")
  setTimeout(function(){
    $("#"+currentColor).removeClass("pressed");
}, 100);
}


function checker() {
  var trueCount = 0;
  for (var i = 0; i < gamePattern.length;i++) {
    if (gamePattern[i] === userClickedEvent[i]) {
      console.log("correct!")
      trueCount = trueCount + 1;

    }else {
      console.log("wrong")
    }

  }

  if (i === trueCount){
    userClickedEvent = [];
    setTimeout(nextSequence,1000)
  } else{
    playSound("wrong");

    $("body").addClass("game-over");
    $("h1").text("Game Over, Press Any Key to Restart")

    setTimeout(function(){
      $("body").removeClass("game-over"); }, 100);

    var clickedKey = false;
    $(document).keydown(function(){
      if (clickedKey === false){
        console.log(keyPressed)
        restart();
        clickedKey = true;
      } 
    });

  };
}

function restart() {
    gamePattern = [];
    userClickedEvent = [];
    level = 0;
    console.log(gamePattern);
    console.log(userClickedEvent);
    console.log(level);
    nextSequence()
}