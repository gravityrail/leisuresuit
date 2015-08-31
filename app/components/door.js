var Crafty = require('craftyjs');

module.exports = Crafty.c("Door", {
	init: function() {
		this.requires("2D, Canvas, Solid, Collision, Wall");
	},
	door: function(scene_name) {
		this.destination = scene_name;
	}
});