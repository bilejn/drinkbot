var model = (function(base) {
	var json;
	
	base.getJson = json;
	
	base.setJson = function () {
		$.ajax({
    		url : "http://54.154.177.207/db.php",
		    dataType:"jsonp",
		    jsonp:"mycallback",
		    success:function(data, textStatus, jqXHR) {
				$.jStorage.set("data", data);
				//window.plugins.toast.showShortCenter('List loaded!');
				//alert("List loaded.");
				$.mobile.changePage( "#home", { allowSamePageTransition: true } );
		    },
			error: function(jqXHR, textStatus, errorThrown) {
				window.plugins.toast.showShortCenter("Error loading list.");
			},
			complete: function (jqXHR, textStatus){

			}
		});
	}
	
	return base;
}( model || {}));