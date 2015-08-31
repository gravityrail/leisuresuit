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
		.background("bg_leftys_interior")
		.wall(0, scale(160), scale(320), 8)
		.door('main', scale(140), scale(159), scale(50), scale(10));
}

module.exports = Crafty.defineScene("leftys", function() {
	generateWorld();
	createPlayer();
});