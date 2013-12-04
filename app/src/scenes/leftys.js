Crafty.scene("leftys", function() {
  var elements = [
    "src/interfaces/info.js"
  ];

  //when everything is loaded, run the main scene
  require(elements, function() {
    //sc['ufo'] = new Ufo();
    console.log("leftys");
    // infc['info'] = new Info();
    generateWorld();
    createPlayer();
  });

  function createPlayer() {
    player = Crafty.e("2D, Canvas, larry, RightControls, Hero, Animate, Collision")
      .attr({x: 120*4, y: 110*4, z: 1})
      .rightControls(4);
  }

  // Method to randomy generate the map
  function generateWorld() {
    //debugger;
    var scale = 4;
    Crafty.e("Background")
      .background("bg_leftys_interior")
      .wall(0,scale*160,scale*320, 8)
      .door('main', scale*140,scale*159,scale*50,scale*10);
  }
});