var Utils = {};

Utils.map = function(v, fromMin, fromMax, toMin, toMax) {
  var _toMin = toMin || 0.0;
  var _toMax = toMax || 1.0;
  return _toMin + (v - fromMin) * (_toMax - _toMin) / (fromMax - fromMin);
};

Utils.clamp = function(v, min, max) {
	var _min = min || 0.0;
	var _max = max || 1.0;
 	return Math.min(Math.max(v, _min), _max);
};

Utils.randomInt = function(min, max) {
	return Math.floor(min + (max - min) * Math.random());
};

Utils.randomFloat = function(min, max) {
	return (min + (max - min) * Math.random());
};

Utils.seq = function(n) {
	var res = [];
	for(var i=0; i<n; i++) {
		res.push(i);
	}
	return res;
}


Utils.seqf = function(start, end, inc) {
	var res = [];
	for(var t=start; t<=end; t+=inc) {
		res.push(t);
	}
	return res;
}

Utils.mix3 = function(a, b, t) {
	return new Vec3(
		a.x + (b.x - a.x) * t,
		a.y + (b.y - a.y) * t,
		a.z + (b.z - a.z) * t
	);
}

Utils.mixer3 = function(a, b) {
	return function(t) {
		return Utils.mix3(a, b, t);
	};
}

module.exports = Utils;
