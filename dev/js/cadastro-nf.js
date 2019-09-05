$(document).ready(function(){

	if(window.matchMedia('(max-width: 767px)').matches){
		$('.form-cadastro-nf').insertBefore($('.info-promocao'));
	}

	$('input[name=numero-nf]').mask("000.000.000", {placeholder: "000.000.000"});
	$('input[name=cnpj-nf]').mask("00.000.000/0000-00", {placeholder: "00.000.000/0000-00"});
	$('input[name=data-nf]').mask("00/00/0000", {placeholder: "__/__/____"});
	$('input[name=valor-nf]').mask("##.##0,00", {placeholder: "R$", reverse: true});


	/* SLIDER */
	var slider = $('.tipos-nf');
	var container = $('.nf-container');
	var slides = $('.nf');

	var widthSlider = $('.tipos-nf').width();
	var counter = 1;

	slides.width(widthSlider);
	container.width(widthSlider * slides.length);

	$('.tipos-nota').on('click', mostraModal);
	$('.modal .btn-close').on('click', escondeModal);
	$('.modal .btn-next').on('click', nextSlide);
	$('.modal .btn-prev').on('click', prevSlide);

	function checkDot(dot){
		$('.dots input').attr('checked', false);
		$('.dots input#nf-' + dot).attr('checked', true);
	}

	function nextSlide(){
		if(counter < slides.length){
			counter++;
			container.animate({
				marginLeft: '-=' + widthSlider
			}, 400);
			checkDot(counter);
		}
	}

	function prevSlide() {
		if(counter > 1){
			counter--;
			container.animate({
				marginLeft: '+=' + widthSlider
			}, 400);
			checkDot(counter);
		}
	}

	function mostraModal(){
		$('.modal').css('z-index', 999).animate({
			'opacity': 1
		}, 600);
	}
	function escondeModal(){
		$('.modal').animate({
			'opacity': 0
		}, 600);

		setTimeout(function() {
			$('.modal').css('z-index', '-1')
		}, 600);
	}

	/* FIM SLIDER */

	// ação do botão
	function increaseQtd(action){
		var tagQtd = $('.qtd-codigo');
		var qtd = parseInt(tagQtd.text());

		/*ALTERADO: */
	var vlNf = $('input[name=valor-nf]').val();
	var qtdLimite = Math.trunc(parseInt(vlNf.replace('.', '')) / 50);
		/*FIM ALTERADO: */

		if(action == 'plus'){
			qtd++;
			addRemoveCodigo(qtd, 'add');
		}else if(action == 'minus'){
			qtd--;
			addRemoveCodigo(qtd, 'remove');
		}

		if(qtd <= 10 && qtd > 0){
			tagQtd.text(qtd);
		}else{
			return;
		}
	}

	function addRemoveCodigo(num, action){
		var codigos = $('.codigos');
		var codLine = $('label[for=cod-1]');
		var newLine = codLine.clone();
		var name = 'cod-' + num;

		if(action == 'add'){
			/*ALTERADO: */
			var vlNf = $('input[name=valor-nf]').val();
			var qtdLimite = Math.trunc(parseInt(vlNf.replace('.', '')) / 50);
			/*FIM ALTERADO: */

			newLine.attr('for', name);
			newLine.find('span').text(num);
			newLine.find('input').attr('name', name).val('');

			if(num <= 10){
				num--;
				newLine.insertAfter($('label[for=cod-' + num +']'));
			}
		}else if(action == 'remove') {
			num++;
			if(num > 1){
				$('label[for=cod-' + num +']').remove();
			}
		}
	}

	$('button[name=mais]').click(function(){
		increaseQtd('plus');
	});

	$('button[name=menos]').click(function(){
		increaseQtd('minus');
	});

	$(window).on("load",function(){
		$(".codigos").mCustomScrollbar({
			theme: "escolaCampeoes",
			scrollbarPosition: "outside",
			scrollButtons: {enable:false}
		});
	});

});
