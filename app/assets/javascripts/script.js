//http://tutorialzine.com/2009/09/stylish-navigation-menu-jquery/ accessed 25/11
$(document).ready(function(){

	$('#navigationMenu li .normalMenu').each(function(){

		$(this).before($(this).clone().removeClass().addClass('hoverMenu'));

	});
	
	$('#navigationMenu li').hover(function(){
	
		$(this).find('.hoverMenu').stop().animate({marginTop:'0px'},200);

	},
	
	function(){
	
		$(this).find('.hoverMenu').stop().animate({marginTop:'-25px'},200);

	});
	
});
