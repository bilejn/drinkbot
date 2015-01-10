var pour = (function(module) {
	module.drink = function (drinkName){
		window.plugins.toast.showShortCenter('POUR ' + drinkName);
	}
	
	return module;
}(	pour || {}));