// initialize variables and set up listeners
var red  = document.querySelector("#red");
var green = document.querySelector("#green");
var blue  = document.querySelector("#blue");

var showButton = document.querySelector("#show");
var clearButton = document.querySelector("#clear");

var colorBar = document.querySelector("#colorBar");

showButton.addEventListener("click", showColorHandler, false);
clearButton.addEventListener("click", clearColorHandler, false);

// render  display
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
		alert("You must enter a number from 0 to 255!");
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

// convert num to hex string
function convert(num) {
	var hexVal = num.toString(16);
	return num<16 ? "0" + hexVal : hexVal;
}

// reset dom objects
function clear() {
	red.value = 0;
	green.value = 0;
	blue.value = 0;
	colorBar.style.backgroundColor = "OldLace";
	hex.innerHTML = "Hexadecimal: #000000";
}
