(function(){
	// 計算結果格納用変数
	var result = 1;
	
	// ローカル計算用メソッド
	var method = {
		// 掛け算
		multiplication : function(a){
			return result * a;
		},
		// 足し算
		addition : function(b){
			return result + b;
		}
	};

	// onload時のログ出力メソッド
	var log = function(){
		console.log("on load");
	};

	// resize時のログ出力メソッド
	var resize = function(){
		console.log("on resize");
	};

	// グローバル計算用メソッド
	window.MATH = window.MATH || {
		// 掛け算
		multiplication : function(num){
			result = method.multiplication(num);
			console.log(result);
		},
		// 足し算
		addition : function(num){
			result = method.addition(num);
			console.log(result);
		}
	};

	// リスナー
	window.addEventListener("load",log,false);
	window.addEventListener("resize",resize,false);
})();
