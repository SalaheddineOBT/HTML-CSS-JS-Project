$(document).ready(function(){
	
$('.fa-bars').click(function(){
	$(this).toggleClass('fa-times');
	$('.navbar').toggleClass('nav-toggle');
});
$(window).on('load scroll',function(){
	$('.fa-bars').removeClass('fa-times');
	$('.navbar').removeClass('nav-toggle');
	
		if($(window).scrollTop() > 30){
		
		$('.header').css({'background':'#97CADB','box-shadow':'0 .2rem rgba(0,0,0,.4)'});
	}else{
		$('.header').css({'background':'none','box-shadow':'none'});
	}
	
});

});

$('.accrodion-header').click(function(){
	$('.accordion .accrodion-body').slideUp();
	$(this).next('.accrodion-body').slideDown();
	$('.accordion .accrodion-header span').text('+');
	$(this).children('span').text('-');
});






var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000,
	speedAsDuration: true
});