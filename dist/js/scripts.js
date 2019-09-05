$(document).ready(function(){

	/* INÍCIO | funções do menu mobile */
	function mobileMenu(){
		$('#nav-icon4').toggleClass('open');

		$('.menu').slideToggle({
			duration: 300,
			start: function(){
				$('.header-bg').toggleClass('header-bg-open');
			}
		});
	}

	//botão menu mobile
	$('#nav-icon4').click(mobileMenu);
	/* FIM | funções do menu mobile */


	//alteração na ordem dos elementos
	if(window.matchMedia('(max-width: 767px)').matches){
		$('.menu ul li a').click(mobileMenu);
		$('.form-login-mobile').insertBefore($('.form-login-mobile').prev());
		$('.form-cadastro').insertBefore($('.form-cadastro').prev());
	}

	/* INÍCIO | estilização dos links ativos no menu */
	function menuAtivo(link){
		$('.menu a').removeClass('link-ativo');
		link.addClass('link-ativo');
	}

	function scrollPage(local){
		var posicao = 0;

		if(local){
			posicao = $('.' + local).offset().top;
		}

		$('body').animate({
			scrollTop: posicao + 'px'
		}, 1000);
	}

	$('.menu a').each(function(){
		switch ($(this).attr('href')) {
			case '#inicio':
				$(this).on('click', function(){
					menuAtivo($(this));
					scrollPage();
				});
			break;

			case '#como-participar':
				$(this).on('click', function(){
					menuAtivo($(this));
					scrollPage('como-participar');
				});
			break;

			case '#premiacao':
				$(this).on('click', function(){
					menuAtivo($(this));
					scrollPage('premiacao');
				});
			break;

			case '#regulamento':
				$(this).on('click', function(){
					menuAtivo($(this));
					scrollPage('regulamento');
				});
			break;

			case '#faq':
				$(this).on('click', function(){
					menuAtivo($(this));
					scrollPage('faq');
				});
			break;

			case '#contato':
				$(this).on('click', function(){
					menuAtivo($(this));
					scrollPage('contato');
				});
			break;
		}
	});
	/* FIM | estilização dos links ativos no menu */

	/* Funcionalidade do botão */
	$('.button-switch input').on('click', function(){
		if($(this).is(':checked')){
			scrollPage('como-participar');
		}else {
			scrollPage();
		}
	});
});
