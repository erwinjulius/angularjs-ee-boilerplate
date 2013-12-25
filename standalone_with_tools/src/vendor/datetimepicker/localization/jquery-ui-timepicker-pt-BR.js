/* Brazilian Portuguese translation for the jQuery Timepicker Addon */
/* Written by Diogo Damiani (diogodamiani@gmail.com) */
(function ($) {
	$.timepicker.regional['pt-BR'] = {
		timeOnlyTitle: 'Escolha a horário',
		timeText: 'Horário',
		hourText: 'Hora',
		minuteText: 'Minutos',
		secondText: 'Segundos',
		millisecText: 'Milissegundos',
		timezoneText: 'Fuso horário',
		currentText: 'Agora',
		closeText: 'Fechar',
		timeFormat: 'HH:mm',
		amNames: ['a.m.', 'AM', 'A'],
		pmNames: ['p.m.', 'PM', 'P'],
		isRTL: false,
		monthNames: ['Janeiro','Fevereiro','Mar&ccedil;o','Abril','Maio','Junho',
		'Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
		//monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн',
		//'Июл','Авг','Сен','Окт','Ноя','Дек'],
		//dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
		//dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
		dayNamesMin: ['Dom','Seg','Ter','Qua','Qui','Sex','S&aacute;b'],
		//prevText: '<Пред',
		//nextText: 'След>',
		//weekHeader: 'Не',
	};
	$.timepicker.setDefaults($.timepicker.regional['pt-BR']);
})(jQuery);
