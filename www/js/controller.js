

document.addEventListener("deviceready", OnDeviceReady, false);

	function OnDeviceReady(){
		if(!$.jStorage.get("data") || $.jStorage.get("data") == null){
			 if (!checkConnection()){
				alert ("No internet connection detected. Connect to internet and click refresh to download list.");
			 } else {
				window.plugins.toast.showShortCenter('Loading List');
				model.setJson();
			 }
		}
		
	}

					