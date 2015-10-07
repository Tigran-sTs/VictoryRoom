jQuery(function ($) {

    // Dropdown
    $(".lang").click(function () {
        $(this).toggleClass("hover");
    });

    // Magnific Popup
    $('a.lightbox').magnificPopup({
        type: 'ajax',
        removalDelay: 300,
        mainClass: 'mfp-fade',
        closeBtnInside: true,
        closeOnBgClick: true,
        midClick: true,
        disableOn: function () {
            if ($(window).width() < 786) {
                return false;
            }
            return true;
        },
        callbacks: {
            ajaxContentAdded: function () {
                this.content.find('.close.btn').on('click', function () {
                    $('.mfp-close').click();
                });
            }
        }
    });

    // Slick Slider
    // Slides for the landing page
    $('.slides').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        duration: 5000,
        arrows: false,
        responsive: [{
            breakpoint: 1024,
            settings: {}
        }, {
            breakpoint: 600,
            settings: {}
        }, {
            breakpoint: 480,
            settings: {}
        }]
    });
    // Slides for the payment methods on footer
    $('.slider').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 7,
        variableWidth: true,
        arrows: false,
        autoplaySpeed: 2000,
        draggable: false
    });
    // Trigger next button
    $('.next-button-slick').click(function () {
        $('.slider').slick('slickNext');
    });
    // Slider image center fix for landing page
    var sliderImgResize = function () {
        var sliderHeight = $(window).height();
        var imgWidth = $('.slick-active img').width();
        var difference = (-1) * ($(window).width() - imgWidth) / 2;
        $('.slick-slide img').css({
            'marginLeft': '-' + difference + 'px'
        }, 10);
        $('.slick-slide').css('height', sliderHeight);
    };
    // Trigger height adjustment on load
    sliderImgResize();

    // Go To Top
    var $goToTop = $('.goToTop');
    $goToTop.click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, 400);
    });

    // Resize behaviors
    $(window).on("resize", function (event) {
        // Trigger height adjustment
        sliderImgResize();
    });
    
    // Scroll behavior 
    var $window = $(window);
    $window.scroll(function () {
        if ($(window).scrollTop() > $('body').height() / 4) {
            $goToTop.fadeIn(400);
        } else {
            $goToTop.fadeOut(400);
        }
    });

<<<<<<< HEAD
	// $('#slides').superslides({
	//   	play: 15000,
	//   	animation_speed: "slow",
	//   	// animation_easing: "easeInOutCubic",
	//   	inherit_width_from: "#slides"
	// });

	$('#slides').slick({
	  	dots: true,
	  	infinite: true,
	  	// autoplay: true,
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

	var sliderImgResize = function(){ 

 //fit slider image on window height
 var sliderHeight = $(window).height();
 $('#slides').css('height', sliderHeight);
 console.log(sliderHeight);
 //centered slider image
 var imgWidth = $('.slick-active img').width();
 var difference = (-1)*($(window).width() - imgWidth)/2;
 $('.slick-active img').css({'marginLeft': '-' + difference + 'px'}, 10);
 $('.slick-slide').css('height', sliderHeight);
     // $('#slides').slick('setPosition');
     sliderImgResize ;

     $(window).on("resize", function(event){
     	sliderImgResize ;
     });

	// jQuery('#slides').on('animated.slides', function () {
	// 	if ($('li').is(":visible") ){
	// 		$(this).addClass('current');
	// 	}
	// });
	// }





};
=======
    // The End :)
>>>>>>> 625ac4bd04009ef328ab24416718715cc079bab8
});