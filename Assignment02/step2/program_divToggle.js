var showButton = document.querySelector("#show");
var hideButton = document.querySelector("#hide");

colorBar.style.backgroundColor = "red";

showButton.addEventListener("click", showDiv, false);
hideButton.addEventListener("click", hideDiv, false);


function showDiv(e) {
	colorBar.style.display = "block";
}

function hideDiv(e) {
	colorBar.style.display = "none";
}