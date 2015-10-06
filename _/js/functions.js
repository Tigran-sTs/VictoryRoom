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

    // 
    

	// $('#slides').superslides({
	//   	play: 15000,
	//   	animation_speed: "slow",
	//   	// animation_easing: "easeInOutCubic",
	//   	inherit_width_from: "#slides"
	// });

	$('#slides').slick({
	  	dots: true,
	  	infinite: true,
	  	autoplay: true,
	  	duration: 5000,
	  	centerPadding: '50%',
	  	arrows: false,
		  responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		      }
		    },
		    {
		      breakpoint: 600,
		      settings: {
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		      }
		    }
		  ]  
	});

var sliderSize = function(){ 

	//fit slider image on window height
		var sliderHeight = $(window).height();
		$('#slides').css('height', sliderHeight);
	};
   
	sliderSize();

    $(window).on("resize", function(event){
    	sliderSize();
    });

	// jQuery('#slides').on('animated.slides', function () {
	// 	if ($('li').is(":visible") ){
	// 		$(this).addClass('current');
	// 	}
	// });






});