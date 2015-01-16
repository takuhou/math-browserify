'use strict';

var Result = require('./result');

var method = {
	multiplication : function(a){
		return Result * a;
	},
	addition : function(b){
		return Result + b;
	}
};

module.exports = method;