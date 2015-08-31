var Crafty = require('craftyjs');

module.exports = Crafty.c('Hero', {
	init: function() {
		//setup animations
		this.requires("SpriteAnimation, Collision, RightControls, LarrySprite4x.png")
			.reel("walk_left", 500, 0, 1, 7)
			.reel("walk_right", 500, 0, 0, 7)
			.reel("walk_up", 500, 0, 3, 5)
			.reel("walk_down", 500, 0, 2, 5)
		//change direction when a direction change event is received
		.bind("NewDirection",
			function(direction) {
				// this.animationSpeed(10);
				if (direction.x < 0) {
					this.animate("walk_left", -1);
				}
				if (direction.x > 0) {
					this.animate("walk_right", -1);
				}
				if (direction.y < 0) {
					this.animate("walk_up", -1);
				}
				if (direction.y > 0) {
					this.animate("walk_down", -1);
				}
				if (!direction.x && !direction.y) {
					this.pauseAnimation();
				}
			})
		// A rudimentary way to prevent the user from passing Solid areas
		.bind('Moved', function(from) {
			// var walls = this.hit('Wall');
			// if (walls) { 
			// 	console.log("hit wall");
			// 	this.attr({
			// 		x: from.x,
			// 		y: from.y
			// 	});
			// 	return;
			// }
			
			var doors = this.hit('Door');
			if (doors) {
				console.log("Hit door(s)");
				console.log(doors);
				var door = doors[0];
				Crafty.scene(door.obj.destination);
				return;
			}
			if (this.hit('Shape') || this.hit('Wall') || this.isOutOfBounds()) {
				console.log("hit shape, wall or boundary");
				this.attr({
					x: from.x,
					y: from.y
				});
			}
		})
		.checkHits("Wall")
		.onHit("Wall", function(input) {
			console.log('hit wall');
			console.log(input);
		}).onHit("Shape", function(input) {
			console.log('hit shape');
			console.log(input);
		});

		return this;
	},
	isOutOfBounds: function() {
		return (this.x < 0 || this.x > (4 * 320 - 4 * 14) || this.y < 0 || this.y > (4 * 166 - 4 * 32))
	}
});