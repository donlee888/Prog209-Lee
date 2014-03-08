//
//  program6:  Hide sprite for random period of time then show and animate
//   
//
// get context
//
var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");

var sprite = {
	source: 64,   // empty sprite position in the spritesheet
	SIZE: 64,   // width and height of sprite
	x: 0,   // origin of sprite in canvas
	y: 200,
	speed: 5,    // speed is 5 pixels
	waitTime: undefined,  // stores the random time to wait before displaying

	// method to find random animation time
	setWaitTime: function() {
		// 
		this.waitTime =	Math.ceil( Math.random() * 10 ) * 60;
	},
	updateAnimation: function() {
		// Change the behavior of animation based on the state
		if ( this.waitTime > 0 || this.waitTime === undefined) {
			this.waitTime--;
		} else {
			this.source = 0;
			this.x += this.speed;
		}
	} 
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
image.src = "images/spriteSheet1.png";

function loadHandler(event) {
    
	sprite.setWaitTime();  
	alert("Time to wait: " + sprite.waitTime/60 + " seconds");

	animationLoop();
}

// Game animation loop: fires every frame (60 times/sec)
//
function animationLoop() {

	// animation loop runs about 60 frames/sec
	requestAnimationFrame( animationLoop, canvas);
	sprite.updateAnimation();
	render();
}

// Draw game 
//
function render() {

	// clear context
    ctx.clearRect( 0, 0, canvas.width, canvas.height);

    // draw new game state
    ctx.drawImage(image, 
    			  sprite.source, 0, 64, 64,
    			  sprite.x, sprite.y, 64, 64);

    // display game stats
    displayScore.innerHTML = "Animals Hit: " + score;
    displayTimeLeft.innerHTML = "Time Left: " + timeLeft;
}