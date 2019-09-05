$(document).ready(function(){

$('input[name=cep]').mask('00000-000');

	if(window.matchMedia('(min-width: 768px)').matches){
		$('.info-promocao').appendTo($('.titulo-cadastro'));
	}

});
