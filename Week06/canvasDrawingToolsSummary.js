//
// Canvas drawing methods, etc. 
//
//
//  Assuming  canvas & context were declared as follows:
//  var canvas = document.querySelector("canvas");
//  var ctx = canvas.getContext("2d");
//


//***********************************************************
// 1)  Fill a rectangle
//     fillRect( originX, originY, width, height)
//
ctx.fillRect(50, 50, 200, 100);


//***********************************************************
// 2)  Change fill color
//
ctx.fillStyle = "rgb(255,0,0)";
ctx.fillRect(50, 50, 200, 100);


//***********************************************************
// 3) Outline of rectangle
//    strokeRect( originX, originY, width, height)
//
ctx.strokeRect(50, 50, 200, 100);


//***********************************************************
// 4a) Change stroke color and width
//
ctx.lineWidth = 5;			// measured in pixels
ctx.strokeStyle = "blue";	// can use any recognized CSS color name
ctx.strokeRect(50, 50, 200, 100);

// 4b) Variation: define rectangle path, then use .fill() or .stroke() to draw
// 
ctx.rect(50,50, 200, 100);
ctx.fill();
ctx.stroke();


//***********************************************************
// 5) Draw a line (a.k.a. path)
//
ctx.beginPath();        // Start the path
ctx.moveTo(100, 100);   // Set the path origin
ctx.lineTo(100, 300);   // Set the path destination
ctx.lineTo(300, 200);
ctx.closePath();        // Close the path so begin and end pts are connected
ctx.stroke();           // Draw the path


//***********************************************************
// 6) Draw a circle (technically a closed arc):    
//    arc( originX, originY, radius, startAngle, endAngle, counterclockwise)
//
ctx.arc(200, 200, 100, 0, 2*Math.PI, false);

//   radian/degree conversion forumlas:
//   radian = Math.PI/180 * degree
//   degree = 180/Math.PI * radian
//
//   Tip: use function to convert radians/degrees
//
ctx.arc(200, 200, 100, 0, rad(360) );

function rad(deg) { 	
	return Math.PI/180 * deg 
}


//************************************************************
// 7a) Save the context state and restore the context state
//
ctx.save();			// use save() before changing colors, line widths, etc.
ctx.restore();		// use restore() to restore state of canvas before save() call

// 7b) Clear rectangular area
//     clearRect( originX, originY, width, height )
//
ctx.clearRect(50, 50, 200, 100);
ctx.clearRect(0,0, canvas.width, canvas.height)   // clears entire canvas


//************************************************************
// 8) Draw text
//
ctx.font = "30px Arial";
ctx.fillText("Make it so!",50,100);	   				//fill with solid color
ctx.strokeText("JavaScript is fun!", 100, 200);		// outlines text


//************************************************************
// 9) Transformation methods: 
//
// 9a)  Using scaling to draw an ellipse
//
ctx.save();								// save previous state of context
ctx.scale(2,1);							// multiplies the x direction by 2
ctx.arc(100,100,50,0,2*Math.PI,false);  // draws circle with x-direction twice
										// the width of y-direction  
ctx.restore();							// restore context to state before scaling

// 9b)  Translate
//
ctx.translate( 150, 150 );     // Moves canvas origin to (150,150)

// 9c)  Rotation
//
ctx.rotate( Math.PI/4 );	   // Rotates canvas clockwise by 45 degrees
							   // Note: rotation starts from canvas origin, which is 
							   // usually (0,0) unless translation has been applied first


//*************************************************************
// 10) Compositing example
// There are 11 compositing options, which combine a destination shape (shape #1) with a 
// source shape (shape #2) into a single 'composite' shape. 
//
// step 1 -- draw destination shape: circle
//
ctx.arc(100,100, 20, 0, Math.PI*2, false);
ctx.fill();

// step 2 -- set compositing option
//
ctx.globalCompositeOperation = "destination-out";  // destination shape will be kept where there is 
												   // no overlap with the source. Everything else
												   // will be made transparent.

// step 3 -- draw source shape: rectangle
//
ctx.fillStyle = "steelblue";                       
ctx.fillRect(200,200,100,100);


//**************************************************************
// 11) Draw Bezier curves

// 11a) quadratic curve (1 control point)
//      quadraticCurveTo( controlPointX,controlPointY,destX,destY );
//
   ctx.moveTo( 100, 200 );        // (srcX, srcY)
   ctx.quadraticCurveTo( 200, 200, 300, 300 );
   ctx.stroke();

// 11b) cubic curve (2 control points)
//      bezierCurveTo(controlPoint1X, controlPoint1Y, controlPoint2X, controlPoint2Y, destX, destY);
//
ctx.moveTo( 100, 200 );        // (srcX, srcY)
ctx.bezierCurveTo( 200, 100, 300, 300, 400, 200 );
ctx.stroke();	
