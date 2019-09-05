$(document).ready(function(){

	if(window.matchMedia('(max-width: 767px)').matches){
		$('.form-cadastro-nf').insertBefore($('.info-promocao'));
	}

	$('input[name=numero-nf]').mask("000.000.000", {placeholder: "000.000.000"});
	$('input[name=cnpj-nf]').mask("00.000.000/0000-00", {placeholder: "00.000.000/0000-00"});
	$('input[name=data-nf]').mask("00/00/0000", {placeholder: "__/__/____"});
	$('input[name=valor-nf]').mask("##.##0,00", {placeholder: "R$", reverse: true});

	// ação do botão
	function increaseQtd(action){
		var tagQtd = $('.qtd-codigo');
		var qtd = parseInt(tagQtd.text());

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
			newLine.attr('for', name);
			newLine.find('span').text(num);
			newLine.find('input').attr('name', name);
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
