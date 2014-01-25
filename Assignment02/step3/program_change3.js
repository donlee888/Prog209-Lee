var showButton = document.querySelector("#show");
var clearButton = document.querySelector("#clear");

showButton.addEventListener("click", showColorHandler, false);
clearButton.addEventListener("click", clearColorHandler, false);

function showColorHandler(e) {
	var r = parseInt("55");
	var g = parseInt("11");
	var b = parseInt("99");

	colorBar.style.backgroundColor  = "rgb(" + r + "," + g + "," + b + ")";			
}

function clearColorHandler(e) {
	clear();
}

function clear() {
	colorBar.style.backgroundColor = "OldLace";
}