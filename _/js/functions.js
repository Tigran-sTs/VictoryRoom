// Browser detection for when you get desparate. A measure of last resort.

// http://rog.ie/post/9089341529/html5boilerplatejs
// sample CSS: html[data-useragent*='Chrome/13.0'] { ... }

// Uncomment the below to use:
// var b = document.documentElement;
// b.setAttribute('data-useragent',  navigator.userAgent);
// b.setAttribute('data-platform', navigator.platform);


jQuery(function($) {

	// Dropdown
    $(".lang").click(function(){
        $(this).toggleClass("hover");
    });
    
    // $("ul.dropdown li ul li:has(ul)").find("a:first").append(" &raquo; ");

});