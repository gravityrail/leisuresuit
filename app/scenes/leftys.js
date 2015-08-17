function createPlayer() {
	player = Crafty.e("2D, Canvas, larry, RightControls, Hero, Animate, Collision")
		.attr({
			x: 120 * 4,
			y: 110 * 4,
			z: 1
		})
		.rightControls(4);
}

// Method to randomy generate the map
function generateWorld() {
	//debugger;
	var scale = 4;
	Crafty.e("Background")
		.background("bg_leftys_interior")
		.wall(0, scale * 160, scale * 320, 8)
		.door('main', scale * 140, scale * 159, scale * 50, scale * 10);
}

module.exports = Crafty.defineScene("leftys", function() {
	console.log("leftys");
	generateWorld();
	createPlayer();
});