'use strict';

var Result = require('./result');

var method = {
	multiplication : function(a){
		return Result.get() * a;
	},
	addition : function(b){
		return Result.get() + b;
	}
};

module.exports = method;