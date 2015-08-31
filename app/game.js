var Crafty = require('craftyjs'),
	Sprites = require("./sprites.js"),
	Config = require('./config.js'),
	Backbone = require('backbone'),
	MouseHover = require('./components/MouseHover.js'),
	BaseEntity = require('./entities/base/BaseEntity.js');

require('./components/background');
require('./components/wall');
require('./components/door');
require('./components/hero');
require('./components/right_controls');
require('./scenes/leftys');
require('./scenes/main');

var gameContainer = {
		env: 'dev',
		gameVersion: '0.0.1',
		scene: 'main'
	};

Crafty.paths({
	"sprites": "./images"
}); //audio: "custom/audio/path/", images: "custom/images/path/"

// prevent arrow keys from scrolling window
window.addEventListener("keydown", function(e) {
    // space and arrow keys
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);

window.onload = function() {

	//start Crafty
	Crafty.init(320 * 4, 168 * 4);
	Crafty.canvas.init();

	// Create Sprites
	console.log("creating sprites");
	var sprites = new Sprites();
	sprites.create();

	// Load config
	gameContainer['conf'] = new Config({});

	Crafty.scene(gameContainer.scene);
};