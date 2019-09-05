$(document).ready(function(){

	var currentPage = $('.home');
	var menu = $('.menu');

	if(currentPage.hasClass('cupom')){
		menu.addClass('menu-cupom');
	}else if(currentPage.hasClass('perfil')){
		menu.addClass('menu-perfil');
	}


});
