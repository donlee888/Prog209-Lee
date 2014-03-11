//
//  program5:  Setup sprite object and animation loop. Animate the sprite
//			   in canvas.
//   
//
// get context
//
var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");

var sprite = {
	sourceX: 0,   // origin of sprite in the spritesheet
	sourceY: 0,
	sourceWidth: 64,   // size of sprite in the spritesheet
	sourceHeight: 64,
	x: 0,   // origin of sprite in canvas
	y: 200,
	width: 64,  // size of sprite in canvas
	height: 64,
	speed: 5  // speed is 5 pixels
};

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
	animationLoop();
}

// Game animation loop: fires every frame (60 times/sec)
//
function animationLoop() {

	requestAnimationFrame( animationLoop, canvas);

	sprite.x += sprite.speed;
	render();
}

// Draw game 
//
function render() {

	// clear context
    ctx.clearRect( 0, 0, canvas.width, canvas.height);

    // draw new game state
    ctx.drawImage(image, 
    			  sprite.sourceX, sprite.sourceY, 
    			  sprite.sourceWidth, sprite.sourceHeight, 
    			  sprite.x, sprite.y, sprite.width, sprite.height);


    // display game stats
    displayScore.innerHTML = "Animals Hit: " + score;
    displayTimeLeft.innerHTML = "Time Left: " + timeLeft;
}