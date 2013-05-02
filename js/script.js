// Inspired by media-query-specific js functionality via http://adactio.com/journal/5429/
$(document).ready(function() {
	// Call media query function
	media_query();
	// Document ready here
});

$(window).load(function() {
	// Window load here
    });
});

$(window).resize(function() {
	// Call media query function
	media_query();
});

function media_query() {
	if (window.getComputedStyle) { // Check for IE
		viewport_size = window.getComputedStyle(document.body,':after').getPropertyValue('content');
	} else {
		if ($(window).width() > 620) { // Set IE
			viewport_size = 'desktop';
		} else {
			viewport_size = 'mobile';
		}
	}
	if (viewport_size.indexOf("desktop") !== -1) { // aka if viewport_size == 'desktop':
		// Call desktop function
		desktop();

	} else {
		// Call mobile function
		mobile();
	}
}


function mobile() {
	// Mobile behavior here
}

function desktop() {
	// Desktop behavior here
}


