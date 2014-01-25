var input = document.querySelector("#input");
var button = document.querySelector("#clicker");

button.addEventListener("click", clickHandler, false);

function clickHandler(e) {
	var n = parseInt( input.value );

	// validate the input value
	if ( validate(n)){
		output.innerHTML = "you entered " + n;
	}
	else {
		alert("You must enter a number from 1 to 10!");
	}
}

function validate(n) {
	if ( n < 1 || n > 10) {
		return false;
	} else {
		return true;
	}
}
