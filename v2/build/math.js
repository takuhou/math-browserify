(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{"./local-method":3,"./result":5}],2:[function(require,module,exports){
'use strict';

var Log = require('./log');

window.addEventListener("load",Log.load,false);
window.addEventListener("resize",Log.resize,false);
},{"./log":4}],3:[function(require,module,exports){
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
},{"./result":5}],4:[function(require,module,exports){
'use strict';

var log = {
	load : function(){
		console.log("on load");
	},
	resize : function(){
		console.log("on resize");
	}
}

module.exports = log;
},{}],5:[function(require,module,exports){
'use strict';

var result = (function(){
	var _num = 1;

	return {
		set : function(num){
			_num = num;
		},
		get : function(){
			return _num;
		}
	}
})();

module.exports = result; 
},{}]},{},[1,2,3,4,5]);
