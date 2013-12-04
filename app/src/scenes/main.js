Crafty.scene("main", function() {

	var elements = [
    "src/interfaces/info.js"
	];

	//when everything is loaded, run the main scene
	require(elements, function() {
		//sc['ufo'] = new Ufo();
		console.log("blah");
		infc['info'] = new Info();
		generateWorld();
		createPlayer();
	});

	function createPlayer() {
		player = Crafty.e("2D, Canvas, larry, RightControls, Hero, Animate, Collision")
			.attr({x: 120*4, y: 110*4, z: 1})
			.rightControls(4);
	}

	// Method to randomy generate the map
  function generateWorld() {
    //debugger;
    var scale = 4;
    Crafty.e("Background")
      .background("bg_leftys")
      .wall(scale*170,0,scale*100,scale*110)
      .door('leftys', 0,0,4*320,scale*100)
      .wall(0,0,4*100,scale*110);
  }

});