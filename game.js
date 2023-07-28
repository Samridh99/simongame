var gamePattern=[];
var level=0;
var userClickedPattern=[];
var buttonColors=["red", "blue", "green", "yellow"];
var started = false;

function nextSequence(){
userClickedPattern = [];
level++;
$("#level-title").text("Level " + level);
var randomNumber=Math.random()*3;
randomNumber=Math.round(randomNumber);
var randomChosenColour=buttonColors[randomNumber];
$("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
var audio = new Audio("sounds/"+randomChosenColour+".mp3");
audio.play();
gamePattern.push(randomChosenColour);
return randomNumber;
}



function animatePress(){
  $(document).ready(function() {
  $(".btn").click(function() {
  var color = $(this);

      color.addClass("pressed");

      setTimeout(function(){
          color.removeClass("pressed");
      }, 100);
}
)
});
}



function checkAnswer(currentLevel) {


  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

   



    if (userClickedPattern.length === gamePattern.length){

    
      setTimeout(function () {
        nextSequence();
      }, 1000);

    }

  } else {
    $("h1").text("Game Over, Press Any Key to Restart");
    $("body").addClass("game-over")
    setTimeout(function(){
      $("body").removeClass("game-over") 
    },200);
    var audio = new Audio("sounds/wrong.mp3");
audio.play();
    startOver();

  }

}





$(document).keypress(function() {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});



$(".btn").click(function() {
var userChosenColour=$(this).attr("id");
$("#"+userChosenColour).fadeOut(30).fadeIn(30);
animatePress(userChosenColour);
var audio = new Audio("sounds/"+userChosenColour+".mp3");
audio.play();
animatePress();
  userClickedPattern.push(userChosenColour);

  checkAnswer(userClickedPattern.length-1);

  });


function startOver(){
level=0;
started=false;
gamePattern=[];
}