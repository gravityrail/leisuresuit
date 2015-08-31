var scale = require('../scale'),
	larry = require('../larry'),
	tilemap = require('./larry.json'),
	zlib = require('zlib');

function generateWorld() {
	Crafty.e("Background")
		.background("bg_leftys")
		// .wall(scale(170), 0, scale(100), scale(110))
		.door('leftys', scale(115), scale(60), scale(35), scale(70))
		// .wall(0, 0, scale(100), scale(110))
		.polygon(tilemap.layers[1].objects[1].polyline);

	// grab tile data
	// var data = new Buffer(tilemap.layers[0].data, 'base64');
	// console.log(data.toString());
	// var binData = zlib.inflateSync(data);
	// console.log(data);

	// find any objectgroups with polygons and render as scenery
	// debugger;
	// var poly = new Crafty.polygon(tilemap.layers[1].objects[1].polyline);
	// console.log(poly);
	// Crafty.DebugPolygon.debugPolygon(poly);
}

module.exports = Crafty.defineScene("main", function() {
	generateWorld();
	// console.log(tilemap);
	larry.init();
});