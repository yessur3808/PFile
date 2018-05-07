//* Nav Scroll Effect *//
$(window).on('scroll', function(){
	if ($(window).scrollTop()){
		$('nav').addClass('navblack');
	}
	else {
		$('nav').removeClass('navblack');
	}
})
$(document).ready(function(){
	$(".menu h4").click(function(){
		$("nav ul").toggleClass("active")
	})
})



