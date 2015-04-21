Frontend = {
	new-game: function (x,y,color,eaglep){
		var geometry = new THREE.BoxGeometry( 1, 1, 1 );
		var material = new THREE.MeshBasicMaterial( {color: 0xffffff} );
		var cube = new THREE.Mesh( geometry, material );
		var soldier = new Piece(x,y,color,eaglep, cube);

		soldier.load();
	},
	begin-turn: function(){

	}
	,
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

	move: function(begX, begY, endX, endY, color, eaglep){
		color = (color == "r" ? "red" : "white");
		for(var i = 0; i < pieceArray.length; i++){
			if(pieceArray[i].name == begX+""+begY){
				// scene.remove(pieceArray[i]);
				// pieceArray.splice(i,i);
				// Frontend.new(endX,endY,color,"soldier");
				backend.tryMove(begX, begY, endX, endY);
				break;
			}
		}
	}
}
