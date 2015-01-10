var pour = (function(module) {
	module.drink = function (drinkName){
		window.plugins.toast.showShortCenter(drinkName + '/n POUR');
	}
	
	return module;
}(	pour || {}));