var numSquares = 6;
var colors = generateColor(numSquares);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


easyBtn.addEventListener("click", function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numSquares = 3;
	colors = generateColor(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++){
		if (colors[i]){
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
});

hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares = 6;
	colors = generateColor(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++){

			squares[i].style.backgroundColor = colors[i];

			squares[i].style.display = "block";

	}
});

resetButton.addEventListener("click", function (){
	this.textContent = "New Colors"
	messageDisplay.textContent = "";
	//generate all new colors
	colors = generateColor(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change color display to match picked color
	colorDisplay.textContent = pickedColor;
	//change colors of squares
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "skyblue";
});

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
	//add initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function(){
		//grab color of clicked square
		var clickedColor = this.style.backgroundColor
		//compare color to picked color
		if(clickedColor === pickedColor){
			resetButton.textContent = "Play Again"
			messageDisplay.textContent = "Correct!"
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
		} else {
			this.style.backgroundColor = "whitesmoke";
			messageDisplay.textContent = "Try Again"
	}
	})
};

function changeColors (color) {
	for(var i = 0; i< squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
};

function pickColor () {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
};

function generateColor(num) {
	//make an array
	var arr = [];
	//repeat num times
	for(var i = 0; i < num; i++){
		//get random color and push into arr
		arr.push(randomColor())
	}
	//return the array
	return arr;
};

function randomColor(){
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256)
	//pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256)
	//pick a "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256)
	// return "rgb(" + r + ", " + g + ", " + b + ")";
	return `rgb(${r}, ${g}, ${b})`;
};