$(document).ready(function(){

	$('.lojas-enderecos').addClass('esconde');

	$('.img-passos').on('click', function(){
		$('.passo-a-passo').fadeOut();
		setTimeout(function(){
			$('.lojas-enderecos').removeClass('esconde');
		}, 400);
	});

	$('#btn-voltar').on('click', function(){
		$('.lojas-enderecos').addClass('esconde');
		$('.passo-a-passo').fadeIn();
	});

  $('.slider').slick({
	dots: true,
	infinite: true,
	speed: 300,
	mobileFirst: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
		},
		{
			breakpoint: 800,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3
			}
		}
	]
});


});
