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
			.attr({x: 160, y: 144, z: 1})
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

    // Generate the grass along the x-axis
    // for (var i = 0; i < 25; i++) {
    //   // Generate the grass along the y-axis
    //   for (var j = 0; j < 20; j++) {
    //     grassType = Crafty.math.randomInt(1, 4);
    //     Crafty.e("2D, Canvas, grass" + grassType)
    //       .attr({x: i * 16, y: j * 16});

    //     // 1/50 chance of drawing a flower and only within the bushes
    //     if (i > 0 && i < 24 && j > 0 && j < 19 && Crafty.math.randomInt(0, 50) > 49) {

    //       Crafty.e("2D, Canvas, flower, SpriteAnimation")
    //         .attr({x: i * 16, y: j * 16})
    //         .animate("wind", 0, 1, 3)
    //         .bind("enterframe", function() {
    //           if (!this.isPlaying())
    //             this.animate("wind", 80);
    //         });
    //     }
    //   }
    // }

    // // Create the bushes along the x-axis which will form the boundaries
    // for (var i = 0; i < 25; i++) {
    //   Crafty.e("2D, Canvas, wall_top, solid, bush"+Crafty.math.randomInt(1,2))
    //     .attr({x: i * 16, y: 0, z: 2});
    //   Crafty.e("2D, Canvas, wall_bottom, solid, bush"+Crafty.math.randomInt(1,2))
    //     .attr({x: i * 16, y: 304, z: 2});
    // }

    // // Create the bushes along the y-axis
    // // We need to start one more and one less to not overlap the previous bushes
    // for (var i = 1; i < 19; i++) {
    //   Crafty.e("2D, DOM, canvas, wall_left, solid, bush" + Crafty.math.randomInt(1,2))
    //     .attr({x: 0, y: i * 16, z: 2});
    //   Crafty.e("2D, DOM, canvas, wall_right, solid, bush" + Crafty.math.randomInt(1,2))
    //     .attr({x: 384, y: i * 16, z: 2});
    // }
  }

});