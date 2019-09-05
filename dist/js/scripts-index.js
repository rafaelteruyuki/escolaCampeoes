$(document).ready(function(){

	$('input[name=cpf]').mask('000.000.000-00', {reverse: true});

	// definição de mácara para telefone
	var SPMaskBehavior = function (val) {
		return val.replace(/\D/g, '').length === 11 ? '(00) 0.0000-0000' : '(00) 0000-00009';
	},
	spOptions = {
		onKeyPress: function(val, e, field, options) {
			field.mask(SPMaskBehavior.apply({}, arguments), options);
		}
	};
	$('input[name=telefone]').mask(SPMaskBehavior, spOptions);

	//remove animação no mobile
	if(window.matchMedia('(max-width: 767px)').matches){
		$('.carro-home>img').removeClass('animated');
	}

	// habilita plug-in de scrollBox
	$(window).on("load",function(){
		$(".box-regulamento").mCustomScrollbar({
			theme:"escolaCampeoes",
			scrollbarPosition: "outside",
			scrollButtons: {enable:true}
		});
	});

	// Funcionalidade do Accordion
	$('.accordion-title').on('click', function(e){
		var thisContent = $(this).next('.accordion-content');
		var otherContent = $('.accordion-content:visible');

		var thisIcon = $(this).find('.title-icon');
		var otherIcon = $('.title-icon.rotate');

		if(thisContent.is(':visible')){
			thisContent.slideToggle();
			thisIcon.removeClass('rotate');
		}else{
			otherContent.slideToggle();
			thisContent.slideToggle();

			otherIcon.removeClass('rotate');
			thisIcon.addClass('rotate');
		}
	});
});
