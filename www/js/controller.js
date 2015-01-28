

document.addEventListener("deviceready", OnDeviceReady, false);

	function OnDeviceReady(){
		if(!$.jStorage.get("data") || $.jStorage.get("data") == null){
			 if (!checkConnection()){
				alert ("No internet connection detected. Connect to internet and click refresh to download list.");
			 } else {
				 if ($.jStorage.get("drinkDatabase_storage") == null || $.jStorage.get("drinkDatabase_storage") == ""){
					alert ("Insert address of the database under settings section");			 
				 } else {
					window.plugins.toast.showShortCenter('Loading List');
					model.setJson();
				}	
			 }
		} else {
			$.mobile.changePage( "#home", { allowSamePageTransition: true });
		}
		
	}

					