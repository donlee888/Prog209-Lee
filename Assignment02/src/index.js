/* Prog 209 Assignment 02 by Donald Lee */



var red = document.querySelector(".redBox");
var green = document.querySelector(".greenBox");
var blue = document.querySelector(".blueBox");

/* var button = document.querySelector("#clicker"); */

var showButton = document.querySelector("showButton");
var clearButton = document.querySelector("clearButton");

var colorBar = document.querySelector("#colorBar");

/*
var hideButton = document.querySelector("#hide");
var input = document.querySelector("#input");
*/

/* colorBar.style.backgroundColor = "OldLace"; */

showButton.addEventListener("click", showColorHandler, false);
clearButton.addEventListener("click", clearColorHandler, false);


function showColorHandler(e) {
	var r = parseInt(red.value);
	var g = parseInt(green.value);
	var b = parseInt(blue.value);

	if ( validate(r) && validate(g) && validate(b) ){
		colorBar.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
		// extra credit		
		hex.innerHTML = "Hexadecimal: #" + convert(r) + convert(g) + convert(b);
	}
	else {
		alert("Please enter a number between 0 to 255!");
		clear();
	}
}

function clearColorHandler(e) {
	clear();
}

function validate(color) {
	if ( isNaN(color) || color < 0 || color > 255)  {
		return false;
	}
	return true;
}


function convert(num) {
	var hexVal = num.toString(16);
	return num<16 ? "0" + hexVal : hexVal;
}


function clear() {
	red.value = 0;
	green.value = 0;
	blue.value = 0;
	colorBar.style.backgroundColor = "OldLace";
	hex.innerHTML = "Hexadecimal: #000000";
}


/*
function showDiv(e) {
	colorBar.style.display = "block";
}

function hideDiv(e) {
	colorBar.style.display = "none";
}

function clickColorHandler(e) {
	var n = (input.value);

	// validate the input value
	if (validate(n)) {
		output.innerHTML = "you entered " + n;
	} else {
		alert("You must enter a number from 1 to 255!");
	}
}

function showColorHandler(e) {
	var r = parseInt(red.value);
	var g = parseInt(green.value);
	var b = parseInt(blue.value);

	if (validate(r) && validate(g) && validate(b)) {
		colorBar.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
		// extra credit
		hex.innerHTML = "Hexadecimal: #" + convert(r) + convert(g) + convert(b);
	} else {
		alert("Please enter a number between 0 to 255!");
		clear();
	}
}

function clearColorHandler(e) {
	clear();
}

function validate(color) {
	if (isNaN(color) || color < 0 || color > 255) {
		return false;
	}
	return true;
}

// convert num to hex string
function convert(num) {
	var hexVal = num.toString(16);
	return num < 16 ? "0" + hexVal : hexVal;
}

// reset dom objects
function clear() {
	red.value = 0;
	green.value = 0;
	blue.value = 0;
	colorBar.style.backgroundColor = "OldLace";
	hex.innerHTML = "Hexadecimal: #000000";
}


 function validate(n) {
 if (n < 1 || n > 255) {
 return false;
 } else {
 return true;
 }
 }

 function clearColorHandler(e) {
 clear();
 }

 function clear() {
 colorBar.style.backgroundColor = "OldLace";
 }

 <div id="hex">HEX: <input type="text"></input></div>
 <div id="rgb">RGB: <input type="text"></input></div>

 var canvas = document.getElementById('canvas_picker').getContext('2d');

 // create an image object and get it’s source
 var img = new Image();
 img.src = 'image.jpg';

 // copy the image to the canvas
 $(img).load(function(){
 colorBar.drawImage(img,0,0);
 });
 bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
 // http://www.javascripter.net/faq/rgbtohex.htm
 function rgbToHex(R,G,B) {return toHex(R)+toHex(G)+toHex(B)}
 function toHex(n) {
 n = parseInt(n,10);
 if (isNaN(n)) return "00";
 n = Math.max(0,Math.min(n,255));
 return "0123456789ABCDEF".charAt((n-n%16)/16)  + "0123456789ABCDEF".charAt(n%16);
 }
 $('#canvas_picker').click(function(event){
 // getting user coordinates
 var x = event.pageX - this.offsetLeft;
 var y = event.pageY - this.offsetTop;
 // getting image data and RGB values
 var img_data = canvas.getImageData(x, y, 1, 1).data;
 var R = img_data[0];
 var G = img_data[1];
 var B = img_data[2];  var rgb = R + ',' + G + ',' + B;
 // convert RGB to HEX
 var hex = rgbToHex(R,G,B);
 // making the color the value of the input
 $('#rgb input').val(rgb);
 $('#hex input').val('#' + hex);
 });

 /*

 var  button = document.querySelector("button");
 button.addEventListener("click", clickHandler, false);
 button.style.cursor = "pointer";

 function clickHandler() {
 var input = document.querySelector("#input");
 var output = document.querySelector("#output");
 output.innerHTML = input.value;
 }
 */