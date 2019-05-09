$(function() {
	var navigation = $('.header');
	$(window).scroll(function() {
		var scroll = $(window).scrollTop();
		if (scroll > 0) {
			navigation.fadeOut(150);
		} else {
			navigation.fadeIn(300);
		}
	});
});
