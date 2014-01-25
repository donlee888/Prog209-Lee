var input = document.querySelector("#input");
var button = document.querySelector("#clicker");
var showButton = document.querySelector("#show");
var clearButton = document.querySelector("#clear");
var hideButton = document.querySelector("#hide");

colorBar.style.backgroundColor = "red";
showButton.addEventListener("click", showDiv, false);
hideButton.addEventListener("click", hideDiv, false);
showButton.addEventListener("click", showColorHandler, false);
clearButton.addEventListener("click", clearColorHandler, false);
button.addEventListener("click", clickHandler, false);

function showDiv(e) {
	colorBar.style.display = "block";
}

function hideDiv(e) {
	colorBar.style.display = "none";
}

function showColorHandler(e) {
	var r = parseInt("55");
	var g = parseInt("11");
	var b = parseInt("99");

	colorBar.style.backgroundColor  = "rgb(" + r + "," + g + "," + b + ")";			
}

function clickHandler(e) {
	var n = parseInt(input.value);

	// validate the input value
	if (validate(n)) {
		output.innerHTML = "you entered " + n;
	} else {
		alert("You must enter a number from 1 to 255!");
	}
}

function validate(n) {
	if (n < 1 || n > 255) {
		return false;
	} else {
		return true;
	}
}



function showColorHandler(e) {
	var r = parseInt("55");
	var g = parseInt("11");
	var b = parseInt("99");

	colorBar.style.backgroundColor  = "rgb(" + r + "," + g + "," + b + ")";			
}



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