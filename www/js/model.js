var model = (function(base) {
	var json;
	var db = $.jStorage.get("drink_Database");
	
	base.getJson = json;
	
	base.setJson = function () {
		$.ajax({
    		url : db,
		    dataType:"jsonp",
		    jsonp:"mycallback",
		    success:function(data, textStatus, jqXHR) {
				$.jStorage.set("data", data);
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