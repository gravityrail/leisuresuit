var scale = require('./scale');

module.exports = {
	init: function() {
		Crafty.e("2D, Canvas, larry, RightControls, Hero, Animate, WiredHitBox, Collision")
			.attr({
				x: scale(120),
				y: scale(110),
				z: 1
			})
			.rightControls(4)
			.collision(new Crafty.polygon(scale([[0,30], [16,30], [16, 35], [0,35]]))); // his feet are what hit!
	}
}