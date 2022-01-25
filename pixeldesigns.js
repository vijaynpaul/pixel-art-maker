// Select color input
var colorEl = document.getElementById('colorPicker');

// Select size input
const heightEl = document.getElementById('inputHeight');
const widthEl = document.getElementById('inputWidth');

var canvas = document.getElementById('pixelCanvas')
const submit = document.getElementById('submitbutton')
// Your code goes here!
// When size is submitted by the user, call makeGrid()
// Taking the user input and storing it
submit.addEventListener("click", function(event)  {
  event.preventDefault();
  const row = heightEl.value;
  const column = widthEl.value;
makeGrid(row,column);
console.log('height:'+ row +'  width:'+column);


//creating the grid with the input values 
function makeGrid(){
  canvas.innerHTML='';
//Insert rows and columns
for(var i = 0; i < row; i++){
  let canvasRow = canvas.insertRow(i);
  for(var j = 0;j < column;j++){
    canvasRow.insertCell(j);
  }
}
}});
document.getElementById('colorPicker').addEventListener("change", function(event){
  event.preventDefault();
  colorEl =this.value;
  console.log(colorEl); 
 
}
) ;


canvas.addEventListener('click', function(e){
e.stopPropagation();
let td = e.target;
// unclick the color cell
if (td.hasAttribute("style")){
  td.removeAttribute("style");}
else{
  td.style.backgroundColor = colorEl;
}


console.log(td.style);
});
