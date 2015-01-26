/*$(document).ready(function(){
	
	if(!$.jStorage.get("data") || $.jStorage.get("data") == null){
		model.setJson();
	}
}); */

document.addEventListener("deviceready", OnDeviceReady, false);

	function OnDeviceReady()    {
	
		if(!$.jStorage.get("data") || $.jStorage.get("data") == null){
		model.setJson();
		}
		
	}

					