var Backbone = require('backbone');

var Config = Backbone.Model.extend({
	defaults: {
		'renderType': 'Canvas'
	},
	initialize: function() {

	}
});

module.exports = Config;