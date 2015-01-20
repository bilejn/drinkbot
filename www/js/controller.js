$(document).ready(function(){
	checkConnection();

	if($.jStorage.get("data")==null){
		$.ajax({
    		url : "http://54.154.177.207/db.php",
		    dataType:"jsonp",
		    jsonp:"mycallback",
		    success:function(data) {
				$.jStorage.set("data", data);
				$.mobile.changePage( "#home", { allowSamePageTransition: true } );
		    },
			error: function(e) {
			alert("network error!");
				//window.plugins.toast.showShortTop('Network Error!');
			}
		});
	}
});

					