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
	  	infinite: true,
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


	var sliderImgResize = function(){ 

	//fit slider image on window height
		var sliderHeight = $(window).height();
		$('#slides').css('height', sliderHeight);
		console.log(sliderHeight);
	//centered slider image
		var imgWidth = $('.slick-active img').width();
    	var difference = (-1)*($(window).width() - imgWidth)/2;
    	$('.slick-active img').animate({'marginLeft': '-' + difference + 'px'}, 10);
    	$('.slick-slide').css('height', sliderHeight)
    	$('#slides').slick('setPosition');

	}
	sliderImgResize();

    $(window).on("resize", function(event){
		sliderImgResize();
    });

	// jQuery('#slides').on('animated.slides', function () {
	// 	if ($('li').is(":visible") ){
	// 		$(this).addClass('current');
	// 	}
	// });
	// }





});