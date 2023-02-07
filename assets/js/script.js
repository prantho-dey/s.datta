(function ($) {

    'use strict';

	// Mobile Menu
	$('.hamburger').on('click', function(){
		$('.mobile-menu-wrapper').addClass('menu-active');
	})
	$('.mobile-menu-close').on('click', function(){
		$('.mobile-menu-wrapper').removeClass('menu-active');
	})

})(jQuery);
