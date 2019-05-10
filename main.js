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

$(document).ready(function hithere() {
	$('#hithere').fadeIn(500).delay(1000).fadeOut(500);
});

$.when( hithere() ).done(function() {
	$('#main').show(250);
});
