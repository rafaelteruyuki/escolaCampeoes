$(document).ready(function(){

	// mascaras

	var SPMaskBehavior = function (val) {
		return val.replace(/\D/g, '').length === 11 ? '(00) 0.0000-0000' : '(00) 0000-00009';
	},
	spOptions = {
		onKeyPress: function(val, e, field, options) {
			field.mask(SPMaskBehavior.apply({}, arguments), options);
		}
	};

	$('input[name=cpf]').mask('000.000.000-00', {reverse: true});
	$('input[name=telefone]').mask(SPMaskBehavior, spOptions);
	$('input[name=celular]').mask(SPMaskBehavior, spOptions);
	$('input[name=cep]').mask('00000-000');

	if(window.matchMedia('(min-width: 768px)').matches){
		$('.info-promocao').appendTo($('.titulo-perfil'));
	}

});
