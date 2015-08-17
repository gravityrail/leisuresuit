var Crafty = require('craftyjs');

module.exports = Crafty.c('Hero', {
	init: function() {
		//setup animations
		this.requires("SpriteAnimation, Collision, RightControls, LarrySprite4x.png")
			.reel("walk_left", 1000, 0, 1, 7)
			.reel("walk_right", 1000, 0, 0, 7)
			.reel("walk_up", 1000, 0, 3, 5)
			.reel("walk_down", 1000, 0, 2, 5)
		//change direction when a direction change event is received
		.bind("NewDirection",
			function(direction) {
				// this.animationSpeed(10);
				if (direction.x < 0) {
					if (!this.isPlaying("walk_left"))
						this.animate("walk_left", -1);
				}
				if (direction.x > 0) {
					if (!this.isPlaying("walk_right"))
						this.animate("walk_right", -1);
				}
				if (direction.y < 0) {
					if (!this.isPlaying("walk_up"))
						this.animate("walk_up", -1);
				}
				if (direction.y > 0) {
					if (!this.isPlaying("walk_down"))
						this.animate("walk_down", -1);
				}
				// if (!direction.x && !direction.y) {
				// 	this.pauseAnimation();
				// }
			})
		// A rudimentary way to prevent the user from passing solid areas
		.bind('Moved', function(from) {
			var doors = this.hit('Door');
			if (doors) {
				var door = doors[0];
				Crafty.scene(door.obj.destination);
				return;
			}
			if (this.hit('solid') || this.isOutOfBounds()) {
				this.attr({
					x: from.x,
					y: from.y
				});
			}
		});
		return this;
	},
	isOutOfBounds: function() {
		return (this.x < 0 || this.x > (4 * 320 - 4 * 14) || this.y < 0 || this.y > (4 * 166 - 4 * 32))
	}
});