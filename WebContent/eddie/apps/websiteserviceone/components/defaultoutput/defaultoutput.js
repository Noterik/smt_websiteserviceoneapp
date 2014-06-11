var $cname = function(options){
	var self = {};
	var settings = {
		start : 0,
		provider : '',
		limit : 50
	}

	
	$.extend(settings, options);
	

	self.testCall = function() {
		alert("bla");
    }
	
	return self;
}