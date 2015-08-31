var FACTOR = 4;

function scaleScalar(input) {
	return input * FACTOR;
}

function scalePoints(input) {
	return input.map(function(point) {
		return [FACTOR*point[0], FACTOR*point[1]];
	});
}

module.exports = function(input) {
	if ( input.constructor === Array ) {
		return scalePoints(input);
	} else {
		return scaleScalar(input);
	}
};