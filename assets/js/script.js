(function ($) {

    'use strict';

	// Mobile Menu
	$('.hamburger').on('click', function(){
		$('.mobile-menu-wrapper').addClass('menu-active');
		$('body').addClass('menu-body');

	})
	$('.mobile-menu-close').on('click', function(){
		$('.mobile-menu-wrapper').removeClass('menu-active');
		$('body').removeClass('menu-body');
	})
	$('.mobile-menu ul li').on('click', function(){
		$('.mobile-menu-wrapper').removeClass('menu-active');
		$('body').removeClass('menu-body');
	})

	// Countdown
	$('.odometer').appear(function (e) {
		var odo = $(".odometer");
		odo.each(function () {
			var countNumber = $(this).attr("data-count");
			$(this).html(countNumber);
		});
	});

	$('.testimonial-wrapper').owlCarousel({
		items:1,
		loop:true,
		margin:0,
		autoHeight:true,
		autoplay:true,
		autoplayTimeout:5000,
		autoplayHoverPause:true,
		nav:true,
		navText: [`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		
		<path d="M19 12H5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M12 19L5 12L12 5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
		
		</svg>`,`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M5 12H19" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M12 5L19 12L12 19" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
		</svg>
		`]
	})

})(jQuery);
