//
//  program2:  Load image into program with "load" event. Display image in canvas
//   
//
// get context
//
var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");

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
    ctx.drawImage(sprite,0,0);
}