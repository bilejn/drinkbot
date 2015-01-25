var pour = (function(module) {

	var args;

	module.drink = function (drinkName, c0, c1, c2, c3, c4, c5, c6, c7){
		args = "P0:"+c1+";P1:"+c4+";P2:"+c3+";P3:"+c2+";P4:"+c5+";P5:"+c7+";P6:"+c6+";P7:"+c0
		var title = "New Order";
		var message = "Pour "+ drinkName + "?";
		callback;
		var buttons =  ['Pour','Cancel'];
		showConfirm (title, callback, message, buttons);
	}
	
	function callback (index) {
		alert(index);
	}
	
	function pourFunction(){
	
		var coreId = "50ff70065067545650150287";
        var accessToken = "35a502f3b004169b59838d087b2d20afebf85dc4";
        //This builds the URL to the REST API endpoint for the setpumps function
        //with your given coreId
        var url = "https://api.spark.io/v1/devices/" + coreId + "/setpumps";
		
        //Turn on the alertInfo div to show the user that the pumping is being attempted
        alert("Order sent");
        //Make the Ajax Call
        $.ajax({
          type: "POST",
          url: url,
          data: {
             access_token: accessToken,
             args: args
          },
		  success: function (data){
			if(data.return_value == 0){
				alert ("Order completed");
			} else {
				alert ("Error completing order");
			}
		  },
          complete: function (jqxhr, status) {
             //Figure out if the call was successful or not
             //The setpumps function should return a value of 0 if all was well
             //If we got anything else back, it failed. Use that knowledge to show
             //the appropriate alert div.
          }
        });
     };
	
	return module;
}(	pour || {}));

/* Your access_token is: 35a502f3b004169b59838d087b2d20afebf85dc4
	Your UnitID: 50ff70065067545650150287 




curl https://api.spark.io/v1/devices/50ff70065067545650150287/order\-d access_token=35a502f3b004169b59838d087b2d20afebf85dc4\-dparams=”P0:00;P1:00;P2:00;P3:00;P4:00;P5:00;P6:00;P7:04"
Your access_token is: 35a502f3b004169b59838d087b2d20afebf85dc4
Your UnitID: 50ff70065067545650150287 


curl https://api.spark.io/v1/devices/50ff70065067545650150287/setpumps   -d access_token=35a502f3b004169b59838d087b2d20afebf85dc4   -d "args=P0:00;P1:00;P2:00;P3:00;P4:00;P5:00;P6:00;P7:04"
*/