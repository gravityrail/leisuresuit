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
      var doors = this.hit('Door');
      if(doors) {
        var door = doors[0];
        Crafty.scene(door.obj.destination);
        return;
      }
      if(this.hit('solid') || this.isOutOfBounds()){
        this.attr({x: from.x, y:from.y});
      }
    });
    return this;
  },
  isOutOfBounds: function() {
    return (this.x < 0 || this.x > (4*320-4*14) || this.y < 0 || this.y > (4*166-4*32))
  }
});