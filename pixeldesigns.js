// Select color input
var colorEl = document.getElementById('colorPicker');

// Select size input

var canvas = document.getElementById('pixelCanvas');
var submit = document.getElementById('submitbutton');

// Your code goes here!
// When size is submitted by the user, call makeGrid()

submit.addEventListener("click", function(event) {
	event.preventDefault();
	let row = document.getElementById('inputHeight').value;
	let column = document.getElementById('inputWidth').value;
	makeGrid(row, column);
	event.stopPropagation();
	console.log('height:' + row + '  width:' + column);
});



//Creating the grid with the values from the user
function makeGrid(row, column) {
	canvas.innerHTML = '';
	for (var i = 0; i < row; i++) {
		let canvasRow = canvas.insertRow(i);
		for (var j = 0; j < column; j++) {
			canvasRow.insertCell(j);
		}
	}

}
console.log(canvas);

document.getElementById('colorPicker').addEventListener("change", function(event) {
	event.preventDefault();
	colorEl = this.value;
	console.log(colorEl);

});


canvas.addEventListener('click', function(e) {
	e.stopPropagation();
	let td = e.target;
	// unclick the color cell
	if (td.style.backgroundColor == colorEl) {} else {
		td.style.backgroundColor = colorEl;
	}

	console.log(td.style);
});