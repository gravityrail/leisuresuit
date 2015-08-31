var scale = require('../scale'),
	larry = require('../larry');

function generateWorld() {
	Crafty.e("Background")
		.background("bg_leftys_interior")
		.wall(0, scale(160), scale(320), 8)
		.door('main', scale(140), scale(159), scale(50), scale(10));
}

module.exports = Crafty.defineScene("leftys", function() {
	generateWorld();
	larry.init();
});