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

	// Countdown
	$('.odometer').appear(function (e) {
		var odo = $(".odometer");
		odo.each(function () {
			var countNumber = $(this).attr("data-count");
			$(this).html(countNumber);
		});
	});

})(jQuery);
