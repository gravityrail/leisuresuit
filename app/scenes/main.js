// var Info = require('../interfaces/info');

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
		.background("bg_leftys")
		.wall(scale * 170, 0, scale * 100, scale * 110)
		.door('leftys', 0, 0, 4 * 320, scale * 100)
		.wall(0, 0, 4 * 100, scale * 110);
}

module.exports = Crafty.defineScene("main", function() {
	// infc['info'] = new Info();
	generateWorld();
	createPlayer();
});