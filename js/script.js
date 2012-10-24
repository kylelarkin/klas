// Implemented media-query-specific js functionality via http://adactio.com/journal/5429/
var viewport_size = ''; //viewport size

$(document).ready(function() {
	if (window.getComputedStyle) { //for IE
		viewport_size = window.getComputedStyle(document.body,':after').getPropertyValue('content');
	} else {
		viewport_size = 'desktop'; //for IE
	}
	
	
	if (viewport_size.indexOf("desktop") !== -1) { // aka if viewport_size == 'desktop':
		// Desktop behavior
	} else {
		// Mobile behavior
	}
});