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

// "components/background.js",
// 		"components/wall.js",
// 		"components/door.js",
// 		"components/hero.js",
// 		"components/right_controls.js",

var gameContainer = {
		env: 'dev',
		gameVersion: '0.0.1',
		scene: 'main'
	},
	sc = []; // container for backbone scene elements
// infc = []; // container for backbone interface elements

var assets = {
	"sprites": {
		'LarrySprite4x.png': {
			'tile': 56,
			'tileh': 132,
			'elements': {
				larry: [0, 0]
			}
		},
		'lsl1bgs_4x.png': {
			tile: 320 * 4,
			tileh: 168 * 4,
			elements: {
				bg_leftys: [9, 0],
				bg_leftys_interior: [2, 1]
			}
		}
	}
};

Crafty.paths({
	"sprites": "./images"
}); //audio: "custom/audio/path/", images: "custom/images/path/"

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

	//the loading screen - that will be display while assets loaded
	console.log("loading scene");
	Crafty.defineScene("loading", function() {
		console.log("loaded loading scene");
		// clear scene and interface
		sc = [];
		// infc = [];

		var loadingText = Crafty.e("2D, " + gameContainer.conf.get('renderType') + ", Text")
			.attr({
				w: 500,
				h: 20,
				x: ((Crafty.viewport.width) / 2),
				y: (Crafty.viewport.height / 2),
				z: 2
			})
			.text('Loading...')
			.textColor('#000')
			.textFont({
				'size': '24px',
				'family': 'Arial'
			});

		// load takes an array of assets and a callback when complete
		Crafty.load(assets, function() {
				console.log("loaded sprites");
				// array with local components
				loadingText.destroy();
				if (gameContainer.scene != undefined) {
					console.log("loading " + gameContainer.scene);
					Crafty.scene(gameContainer.scene);
				}
			},
			function(e) {
				loadingText.text('Loading (' + (e.percent.toFixed(0)) + '%)');
			});

		//automatically play the loading scene

	});
	Crafty.enterScene("loading");
};