//
//  program3:  Full usage of drawImage(). Initialize display of game stats
//   
//
// get context
//
var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");

// Initialize game stats
//
var timeLeft = 30;
var score = 0;

var displayScore = document.querySelector( "#score");
var displayTimeLeft = document.querySelector( "#timeLeft");

// Load image
//
var sprite = new Image();
sprite.addEventListener("load", loadHandler, false);
sprite.src = "images/spritePig.png";

function loadHandler(event) {
	render();
}

// Draw game 
//
function render() {

	// clear context
    ctx.clearRect( 0, 0, canvas.width, canvas.height);

    // draw new game state
    ctx.drawImage(sprite, 0, 0, 64, 64, 300, 200, 64, 64);

    // display game stats
    displayScore.innerHTML = "Animals Hit: " + score;
    displayTimeLeft.innerHTML = "Time Left: " + timeLeft;
}