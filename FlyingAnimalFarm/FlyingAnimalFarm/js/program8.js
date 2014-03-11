//
//  program8:  Add mouseclick event and test if clicked on sprite
//             If mouse hit on sprite, display sprite HIT state
//   
//
// Get context
//
var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");

// Setup game timer -- independent of animation timer
var gameTimer = Object.create(objTimer);

var sprite = {
	source: 128,  // empty sprite position in the spritesheet is default
	SIZE: 64,     // width and height of sprite
	SHOWLOC: 0,   // normal sprite positon in the spritesheet
	HITLOC: 64,   // hit position in the spritesheet
	x: 0,         // origin of sprite in canvas
	y: 200,
	HIDING: 0,   // sprite states
	MOVING: 1, 
	HIT: 2,  
	state: 0,    // default state is HIDING
	speed: 5,    // speed is 5 pixels
	waitTime: undefined,  // stores the random time to wait before displaying

	// Method to find random animation time
	setWaitTime: function() {
		// 
		this.waitTime =	Math.ceil( Math.random() * 10 ) * 60;
	},
	updateAnimation: function() {

		// Change the behavior of animation based on the state
		if (this.state  === this.HIT) 
		{
			// Congrats! You  hit the sprite
			this.source = this.HITLOC;
		}
		else if ( this.waitTime > 0 || this.waitTime === undefined) 
		{
			// sprite is hiding
			this.waitTime--;
		} 
		else 
		{
			// sprite is visible
			this.source = this.SHOWLOC;

			// check if sprite has moved out of bounds
			if (this.x > canvas.width-this.SIZE || this.x < 0 ) 
			{
				this.speed = -this.speed;
			}
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
image.src = "images/spriteSheet2.png";

// Listen for mouse down events
//
canvas.addEventListener("mousedown",mouseDownHandler,false);


function loadHandler() {
    
	sprite.setWaitTime();  
	alert("Time to wait: " + sprite.waitTime/60 + " seconds");

	// Start the game timer
	gameTimer.time = 30;
	gameTimer.start();

	// Start the animation loop (runs indefinitely)
	animationLoop();
}

function mouseDownHandler(event) {

     // Calculate mouse (x,y) relative to canvas origin
     // Note: the event.pageX and event.pageY mouse coordinates are relative
     //       to the top-left corner of the screen, so need to use the canvas
     //       offsetLeft and offsetTop properties to get canvas (0,0) 
     var canvas_x = event.pageX - canvas.offsetLeft;
     var canvas_y = event.pageY - canvas.offsetTop;

     // Check if mouse was clicked on the sprite
     if ( canvas_x > sprite.x  && canvas_x < sprite.x + sprite.SIZE &&
          canvas_y > sprite.y  && canvas_y < sprite.y + sprite.SIZE ) 
     {
         // Yes! Stop the animation
         sprite.state = sprite.HIT;
     }
}

//**************************************************************************
// Game animation loop: fires every frame (60 times/sec)
//
function animationLoop() {

	// As long as game timer is positive, run the game animation loop
	if (gameTimer.time > 0) {
		// Animation loop runs about 60 frames/sec
		requestAnimationFrame( animationLoop, canvas);
	}

	// Update the sprite's animation -- even once after game time reaches 0
	sprite.updateAnimation();		
	
	// Check for end of game
	if ( gameTimer.time === 0 ) {
		endGame();
	}

	// Display the game
	render();
}
//
//**************************************************************************

function endGame() {
	gameTimer.stop();
}

// Draw game 
//
function render() {

	// Clear context
    ctx.clearRect( 0, 0, canvas.width, canvas.height);

    // Draw new game state
    ctx.drawImage(image, 
    			  sprite.source, 0, 64, 64,
    			  Math.floor(sprite.x), Math.floor(sprite.y), 64, 64);

    // Display game stats
    displayScore.innerHTML = "Animals Hit: " + score;
    displayTimeLeft.innerHTML = "Time Left: " + gameTimer.time;
}