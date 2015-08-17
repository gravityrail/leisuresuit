/**
	examples:
	'sprites_name' : {
		 'file' : 'path/to/file',
		 'tile' : width,
		 'tileh' : height,
		 'elements': {
			 'sprite_name' : [0, 0]
		 }
	},
*/

var Backbone = require('backbone'),
	_ = require('underscore');

var Sprites = Backbone.Model.extend({
	defaults: {
		images: {
			'LarrySprite.png': {
				'file': './images/LarrySprite4x.png',
				'tile': 56,
				'tileh': 132,
				'elements': {
					larry: [0, 0]
				}
			},
			'LarryBackgrounds.png': {
				file: './images/lsl1bgs_4x.png',
				tile: 320 * 4,
				tileh: 168 * 4,
				elements: {
					bg_leftys: [9, 0],
					bg_leftys_interior: [2, 1]
				}
			}
		}
	},

	initialize: function() {

	},

	/**
	 * Create Crafty sprites from images object
	 * Pass key if You want create only one choosen sprite.
	 *
	 * @param  string key - sprite definition key
	 */
	create: function(key) {
		if (key != undefined) {
			element = this.get('images')[key];
			if (element['tileh'] == undefined)
				Crafty.sprite(element['tile'], element['file'], element['elements']);
			else
				Crafty.sprite(element['tile'], element['tileh'], element['file'], element['elements']);

			return true;
		};

		_.each(this.get('images'), function(element, k) {
			if (element['tileh'] == undefined)
				Crafty.sprite(element['tile'], element['file'], element['elements']);
			else
				Crafty.sprite(element['tile'], element['tileh'], element['file'], element['elements']);
		});

	},
	/**
	 * Get path for sprites files - for loading
	 *
	 * @return array array of files paths
	 */
	getPaths: function() {
		var array = [],
			i = 0;
		_.each(this.get('images'), function(element, key) {
			array[i] = element['file']
			i++;
		});

		console.log(array);

		return array;
	}
});

module.exports = Sprites;