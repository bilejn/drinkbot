var pour = (function(module) {
	module.drink = function (drinkName){
		var title = "New Order";
		var message = "Pour "+ drinkName + "?";
		var callback = emptyFunction();
		var buttons =  ['Pour','Cancel'];
		showConfirm (title, callback, message, buttons);
	}
	
	return module;
}(	pour || {}));