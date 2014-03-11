//
//  program7:  Add game timer object. Display countdown and end of game alert
//   
//
// get context
//
var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");

// setup game timer -- independent of animation timer
var gameTimer = Object.create(objTimer);

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

	// Start the game timer
	gameTimer.time = 30;
	gameTimer.start();

	// Start the animation loop (runs indefinitely)
	animationLoop();
}

// Game animation loop: fires every frame (60 times/sec)
//
function animationLoop() {

	// as long as game timer is positive, run the game animation loop
	if (gameTimer.time > 0) {
		// animation loop runs about 60 frames/sec
		requestAnimationFrame( animationLoop, canvas);

		// update the sprite's animation 
		sprite.updateAnimation();		
	} 
	else {
		endGame();
	}

	// Display the game
	render();
}

function endGame() {
	gameTimer.stop();
	alert( "Time's up!")
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
    displayTimeLeft.innerHTML = "Time Left: " + gameTimer.time;
}