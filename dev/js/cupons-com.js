$(document).ready(function(){

	if(window.matchMedia('(max-width: 991px)').matches){
		infoCupons('mobile');
	}else{
		infoCupons('desktop');
	}

	function infoCupons(device){
		var triggers = $(".info-cupons tr");
		var action = (device == 'mobile') ? 'click' : 'mouseenter';

		triggers.on(action, function(){
			var classEvent = $(this).attr('class');

			var todosNumeros = $('.num-sorte li');
			var numeroTargets = $('.num-sorte .' + classEvent);
			todosNumeros.hide();
			numeroTargets.fadeIn();

			var todosCodigos = $('.cod-produto li');
			var codigoTargets = $('.cod-produto .' + classEvent);
			todosCodigos.hide();
			codigoTargets.fadeIn();

			if(action == 'click'){
				$('td').removeClass('ativo');
				$(this).find('td').addClass('ativo');
			}
		});
	}

});
