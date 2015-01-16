'use strict';

var Method = require('./local-method');
var Result = require('./result');

var MATH = window.MATH || {};

MATH.multiplication = function(num){
	Result.set(Method.multiplication(num));
	console.log(Result.get());
};

MATH.addition = function(num){
	Result.set(Method.addition(num));
	console.log(Result.get());
};

window.MATH = MATH;