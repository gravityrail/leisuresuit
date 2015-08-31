var Crafty = require('craftyjs');

module.exports = Crafty.c("Shape", {
	init: function() {
		this.requires("2D, Canvas, Solid, Collision, Wall");
	},
	shape: function(polygon) {
		this.collision(polygon);
		return this;
	}
});