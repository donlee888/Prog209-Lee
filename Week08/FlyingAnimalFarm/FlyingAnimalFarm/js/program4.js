//
//  program4:  Set timer to display sprite at random time.
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
var image = new Image();
image.addEventListener("load", loadHandler, false);
image.src = "images/spritePig.png";

function loadHandler(event) {
	var waitTime = Math.ceil( Math.random() * 10 );

	alert("Time to wait: " + waitTime + " seconds");

	window.setTimeout( timer, waitTime * 1000 );

	function timer( ) {
		render();
	}
}

// Draw game 
//
function render() {

	// clear context
    ctx.clearRect( 0, 0, canvas.width, canvas.height);

    // draw new game state
    ctx.drawImage(image, 0, 0, 64, 64, 300, 200, 64, 64);


    // display game stats
    displayScore.innerHTML = "Animals Hit: " + score;
    displayTimeLeft.innerHTML = "Time Left: " + timeLeft;
}