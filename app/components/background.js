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
		Crafty.e("Wall").wall(x, y, w, h);
		return this;
	},
	door: function(scene, x, y, w, h) {
		Crafty.e("Door").wall(x, y, w, h).door(scene);
		return this;
	},
	shape: function(polyArray) {
		// convert a tilemap array to a crafty polygon
		polyArray = polyArray.map(function(point) {
			return [scale(Math.max(0, point.x)), scale(Math.max(0, point.y))];
		});
		polyArray.pop(); // by default tilemap includes last point at same position as first
		Crafty.e("Shape").shape(new Crafty.polygon(polyArray));
		return this;
	}
});