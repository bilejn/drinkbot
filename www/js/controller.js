$(document).ready(function(){
	
	if(!$.jStorage.get("data") || $.jStorage.get("data") == null){
		model.setJson();
	}
});

					