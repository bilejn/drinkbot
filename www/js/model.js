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
				$.mobile.changePage( "#home", { allowSamePageTransition: true } );
				window.plugins.toast.showShortCenter('List loaded!');
		    },
			error: function(e) {
				window.plugins.toast.showShortCenter('Network Error!');
			}
		});
	}
	
	return base;
}( model || {}));