var Crafty = require('craftyjs'),
	scale = require('../scale');

module.exports = Crafty.c("Background", {
	init: function() {
		this.requires("2D, Canvas");
	},
	background: function(name) {
		this.requires(name);
		this.attr({
			x: 0,
			y: 0
		});
		return this;
	},
	wall: function(x, y, w, h) {
		Crafty.e("2D, Canvas, Wall").wall(x, y, w, h);
		return this;
	},
	door: function(scene, x, y, w, h) {
		Crafty.e("2D, Canvas, Wall, SolidHitBox, WiredHitBox, Door").wall(x, y, w, h).door(scene);
		return this;
	},
	polygon: function(polyArray) {
		polyArray = polyArray.map(function(point) {
			return [scale(point.x), scale(point.y)];
		});
		console.log(polyArray);
		Crafty.e("2D, Canvas, Solid, SolidHitBox, WiredHitBox, Collision").collision(new Crafty.polygon(polyArray));
		return this;
	}
});