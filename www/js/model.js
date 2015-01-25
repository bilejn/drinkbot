var model = (function(base) {
	var json;
	
	base.getJson = json;
	
	base.setJson = function () {
		$.ajax({
    		url : "http://54.154.177.207/db.php",
		    dataType:"jsonp",
		    jsonp:"mycallback",
		    success:function(data) {
				$.jStorage.set("data", data);
				//window.plugins.toast.showShortCenter('List loaded!');
				alert("List loaded (success callback)");
				$.mobile.changePage( "#home", { allowSamePageTransition: true } );
		    },
			error: function(e) {
				//window.plugins.toast.showShortCenter('Network Error!');
				alert("Error loading list (error callback)");
			},
			complete: function ( jqXHR, textStatus){
				//window.plugins.toast.showShortCenter('List loaded!');
				alert("completed loading list (complete callback)");
			}
		});
	}
	
	return base;
}( model || {}));