//loading page
$(window).ready(function(){
	$('.loading-page').fadeOut(400);
	$('body').css('overflow', 'auto')
});
//fire slick slider
$('.main-header').slick({
	slidesToShow: 1,
    slidesToScroll: 1,
	rtl: true,
	dots:true,
	autoplay:true,
	dotsClass:'slick-dots'
});
$(".slick2").slick({
	slidesToShow: 3,
    slidesToScroll: 1,
	rtl: true,
	prevArrow:'.prev-arrow',
	nextArrow:'.next-arrow',
    centerPadding:'50px',
	responsive: [
		{
		  breakpoint: 1024,
		  settings: {
			slidesToShow: 3,
			slidesToScroll: 3,
			infinite: true,
			dots: true
		  }
		},
		{
		  breakpoint: 768,
		  settings: {
			slidesToShow: 2,
			slidesToScroll: 2
		  }
		},
		{
		  breakpoint: 480,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		  }
		}
	  ]
	
});