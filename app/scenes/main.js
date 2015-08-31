var scale = require('../scale');

function createPlayer() {
	player = Crafty.e("2D, Canvas, larry, RightControls, Hero, Animate, Collision")
		.attr({
			x: scale(120),
			y: scale(110),
			z: 1
		})
		.rightControls(4);
}

function generateWorld() {
	Crafty.e("Background")
		.background("bg_leftys")
		.wall(scale(170), 0, scale(100), scale(110))
		.door('leftys', 0, 0, 4 * 320, scale(100))
		.wall(0, 0, scale(100), scale(110));
}

module.exports = Crafty.defineScene("main", function() {
	generateWorld();
	createPlayer();
});