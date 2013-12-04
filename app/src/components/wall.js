Crafty.c("Wall", {
  init: function() {
    this.requires("2D, Canvas, solid, Collision");
  },
  wall: function(left, top, width, height) {
    this.attr({x:left, y:top, w: width, h: height})
        .collision(new Crafty.polygon([0,0], [width, 0], [width, height], [0, height]));
    return this;
  }
});