Crafty.scene("main", function() {

	var elements = [
        //"src/entities/ufo.js",
        "src/interfaces/info.js"
	];

	//when everything is loaded, run the main scene
	require(elements, function() {
		//sc['ufo'] = new Ufo();
		console.log("blah");
		infc['info'] = new Info();
		generateWorld();
		createHero();
		createRightControls();
		createPlayer();
	});

	function createPlayer() {
		player = Crafty.e("2D, Canvas, larry, RightControls, Hero, Animate, Collision")
			.attr({x: 120*4, y: 110*4, z: 1})
			.rightControls(4);
	}


	function createRightControls() {
		Crafty.c("RightControls", {
			init: function() {
				this.requires('Multiway');
			},

			rightControls: function(speed) {
				this.multiway(speed, {UP_ARROW: -90, DOWN_ARROW: 90, RIGHT_ARROW: 0, LEFT_ARROW: 180})
				return this;
			}

		});
	}

	function createHero() {
		Crafty.c('Hero', {
			init: function() {
					//setup animations
					this.requires("SpriteAnimation, Collision")
					.animate("walk_left", 0, 1, 7)
					.animate("walk_right", 0, 0, 7)
					.animate("walk_up", 0, 3, 5)
					.animate("walk_down", 0, 2, 5)
					//change direction when a direction change event is received
					.bind("NewDirection",
						function (direction) {
							if (direction.x < 0) {
								if (!this.isPlaying("walk_left"))
									this.stop().animate("walk_left", 10, -1);
							}
							if (direction.x > 0) {
								if (!this.isPlaying("walk_right"))
									this.stop().animate("walk_right", 10, -1);
							}
							if (direction.y < 0) {
								if (!this.isPlaying("walk_up"))
									this.stop().animate("walk_up", 10, -1);
							}
							if (direction.y > 0) {
								if (!this.isPlaying("walk_down"))
									this.stop().animate("walk_down", 10, -1);
							}
							if(!direction.x && !direction.y) {
								this.stop();
							}
					})
					// A rudimentary way to prevent the user from passing solid areas
					.bind('Moved', function(from) {
						if(this.hit('solid')){
							this.attr({x: from.x, y:from.y});
						}
					});
				return this;
			}
		});
	}

	// Method to randomy generate the map
  function generateWorld() {
  	Crafty.e("2D, Canvas, leftys").
  		attr({x:0, y:0})

  	Crafty.c("Wall", {
  		init: function() {
  			this.requires("2D, Canvas, Collision, solid");
  		},
  		wall: function(left, top, width, height) {
  			this.attr({x:left, y:top, w: width, h: height})
  					.collision(new Crafty.polygon([left,top], [left+width, top], [left+width, top+height], [left, top+height]))
  		}
  	});

  	// barriers to movement
  	Crafty.e("2D, Canvas, Wall").wall(0,0,4*320,4*100);
  	Crafty.e("2D, Canvas, Wall").wall(0,0,4*100,4*110);
  	Crafty.e("2D, Canvas, Wall").wall(4*170,0,4*100,4*110);
  }

});