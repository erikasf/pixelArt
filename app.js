



function makeGrid(){
//here I am just laying out my grid. we are giving it shape by letting it know how big each tile is going to be and where it is 
//going to be spaced. Because divs don't actually have any mass, we have to give it some with the width styling.
	var body = document.querySelector("body");
	//the document.queryselector is done to call up all the elements that may be in the body
	var flag = true;
	for (var i = 0; i < 900; i++){ //this is making our rows for us.
			var gDiv = document.createElement("div");
			gDiv.style.width = "3.23%";
			gDiv.style.float = "left";
			gDiv.style.paddingBottom = "3.23%";
			gDiv.style.border = "1px solid DimGrey";//I chose this color so that when we actually do paint the gird lines won't be so noticeable
			gDiv.style.backgroundColor = "white";
			body.appendChild(gDiv);
		}
		//now i'm going to designate a row of tiles to be our palette holder and will apply event listeners to it 
		//so that we can change colors.
	var tiles = document.querySelectorAll("div");
	for (var j = 29; j < tiles.length; j++){
		tiles[j].addEventListener("click", function(){changeColor(this);});
		tiles[j].addEventListener("dragover", function(event) {event.preventDefault(); changeColor(this);}, false);
		tiles[j].draggable = false;
	}
	createPallette();
}
//i could ahve hard coded the HTML color names and applied them to each of the tiles, but iI foudn a wonderful tutorial on 
//rainbow gradiation . here we are stepping the gradiant down by .3 tenths each tile. 
function createPallette(){
	var tiles = document.querySelectorAll("div");

	

	var frequency = .3;
	var rand1 = 0;
	var rand2 = 0;
	var rand3 = 0;
	for (var i = 0; i < 29 ; i++){
		//math was not thing in school and it sill isnt' so once again thank you to the tutorial for holding my hand during this.
		rand1 = Math.round(Math.sin(frequency*i + 0) * 127 + 128);
		rand2 = Math.round(Math.sin(frequency*i + 2) * 127 + 128);
		rand3 = Math.round(Math.sin(frequency*i + 4) * 127 + 128);

		tiles[i].style.backgroundColor = "rgb("+rand1+","+rand2+","+rand3+")";
		tiles[i].addEventListener("click", function(){changeBrush(this);});

	}
}

var color = "rgb(0, 0, 0)";

function changeBrush(palletteSq){

	color = palletteSq.style.backgroundColor;

}

function changeColor(gDiv){

	gDiv.style.backgroundColor = color;
	
}
makeBoard();


