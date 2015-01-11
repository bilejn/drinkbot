    
  function emptyFunction() {
        // do something
    }
	
	// Show a custom alert
		//
		function showAlert(title, callback, message, button) {
			navigator.notification.alert(
				message,          // title
				callback,         // callback
				title,            // message
				button            // buttonName
			);
		}

		function showConfirm (title, callback, message, buttons){
			navigator.notification.confirm(
			message,           // message
			callback,          // callback to invoke with index of button pressed
			title,             // title
			buttons            // buttonLabels
			);

		}