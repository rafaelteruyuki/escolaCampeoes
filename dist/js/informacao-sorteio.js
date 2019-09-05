$(document).ready(function(){

	if(window.matchMedia('(max-width: 767px)').matches){
		$('.mensagem').insertBefore($('.info-promocao'));
	}

});
