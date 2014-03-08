/* Prog 209 Assignment 02 by Donald Lee */



var red = document.querySelector("#redBox");
var green = document.querySelector("#greenBox");
var blue = document.querySelector("#blueBox");

var showButton = document.querySelector("#showButton");
var clearButton = document.querySelector("#clearButton");

var colorBar = document.querySelector("#colorBar");

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

