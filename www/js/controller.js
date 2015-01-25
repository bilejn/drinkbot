$(document).ready(function(){
	
	if(!$.jStorage.get("data") || $.jStorage.get("data") == null){
		window.plugins.toast.showShortCenter('Downloading List');
		model.setJson();
	}
});

					