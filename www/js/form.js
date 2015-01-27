	function settingsFormf() {
		var ok = true;
			if (document.settingsForm.unitID.value == ""){
				$("#unitIDLabel").addClass("invalid");
				if(ok) ok = false;
			} else {
			    $("#unitIDLabel").removeClass("invalid"); 
				$.jStorage.set("unit_ID",  document.settingsForm.unitID.value);
			}
			if (document.settingsForm.accessToken.value == ""){
				$("#accessTokenLabel").addClass("invalid");
				if(ok) ok = false;
			} else {
				$("#accessTokenLabel").removeClass("invalid");
				$.jStorage.set("access_Token", document.settingsForm.accessToken.value);

			}
			if (document.settingsForm.drinkDatabase.value == ""){
				$("#drinkDatabaseLabel").addClass("invalid");
				if(ok) ok = false;
			} else {
				$("#drinkDatabaseLabel").removeClass("invalid");
				$.jStorage.set("drink_Database", document.settingsForm.drinkDatabase.value);
			}
			
			if (ok){
			/*	$("#unitIDLabel").removeClass("invalid");
				$("#accessTokenLabel").removeClass("invalid");
				$("#drinkDatabaseLabel").removeClass("invalid"); */
				alert("tahnks");
				//showAlert("Submitted", emptyFunction, "Thank you.", 'OK');
				$.mobile.changePage( "#settingsSection", { allowSamePageTransition: true } );
				return false;
			} else {
				alert("again");
				//showAlert("Not submitted", emptyFunction, "Please fill in all fields.", 'OK');
				$.mobile.changePage( "#settingsSection", { allowSamePageTransition: true } );
				return false;			
			}
	}
	
	function deleteSettings() {
			var r = confirm("Are you sure?");
			if (r == true) {
				$.jStorage.set("unit_ID",  "");
				$.jStorage.set("access_Token", "");
				$.jStorage.set("drink_Database", "");
			} else {
				alert("Cancelled");
			}
		return false;
	}
	
