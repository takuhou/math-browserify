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