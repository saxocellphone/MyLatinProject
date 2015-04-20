Frontend = {
	new: function (x,y,color,eaglep){
		var soldier = new Piece(x,y,color,eaglep);
		pieceArray.push(soldier);
		soldier.load();
	},
	start: function (){

	},

	decide: function(){
		alert("decide function");
	},

	end: function(){

	},

	showCode: function(code){
		alert("Code: " + code);
	},

	move: function(begX, begY, endX, endY){
		for(var i = 0; i < pieceArray.length; i++){
			if(pieceArray[i].x == begX && pieceArray[i].y == begY){
				
			}
		}
	}
}
