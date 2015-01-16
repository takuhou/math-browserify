'use strict';

var Method = require('./local-method');
var Result = require('./result');

var MATH = window.MATH || {};

MATH.multiplication = function(num){
	Result = Method.multiplication(num);
	console.log(Result);
};

MATH.addition = function(num){
	Result = Method.addition(num);
	console.log(Result);
};

window.MATH = MATH;