var showButton = document.querySelector("#show");
showButton.addEventListener("click", showColorHandler, false);


function showColorHandler(e) {
	var r = parseInt("55");
	var g = parseInt("11");
	var b = parseInt("99");

	container.style.backgroundColor  = "rgb(" + r + "," + g + "," + b + ")";			
}