jQuery(function($){
    $.datepicker.regional['ja'] = {
        closeText: '閉じる',
        prevText: '<前',
        nextText: '次>',
        currentText: '今日',
        monthNames: ['1','2','3','4','5','6',
        '7','8','9','10','11','12'],
        monthNamesShort: ['1月','2月','3月','4月','5月','6月',
        '7月','8月','9月','10月','11月','12月'],
        dayNames: ['日曜日','月曜日','火曜日','水曜日','木曜日','金曜日','土曜日'],
        dayNamesShort: ['日','月','火','水','木','金','土'],
        dayNamesMin: ['日','月','火','水','木','金','土'],
        weekHeader: '週',
        dateFormat: 'yy/mm/dd',
        firstDay: 0,
        isRTL: false,
        showMonthAfterYear: true,
        yearSuffix: '.'};
    $.datepicker.setDefaults($.datepicker.regional['ja']);
});


$(document).ready(function(){
	
	//Load Modal
	$('.bs-modal-lg').modal('show');
	$('.bs-modal-sm').modal('show');
	
	$('.logo-holder .fa').click(function(){
		$('#side-menu').slideToggle();
	});
	
	//Calerdar Widget
	$( ".input-date" ).datepicker();

	$('.edit').click(function(){
		$(this).children('.tooltip-content').show();
	});
	
	/* Dropdown Menu */
	$('.nav-with-label ul li.has-sub').hover(function(){
		$(this).children('.sub-menu').toggle();
	});
	
	$('.img-show').hover(function(){
		$(this).next('.tooltip-content').fadeToggle();
		var conHeight = $(this).next('.tooltip-content').height();
		console.log(conHeight);
		$(this).next('.tooltip-content').css('margin-top', -(conHeight/2 - 5));
	});
		
	$('.plus-icon').click(function(){
		$(this).next('.tooltip-content-right').toggle();
		$(this).parents('.pr-table').toggleClass('bg-yellow text-white');
		$(this).parents('.pr-table').find('i.icon-star').toggleClass('text-yellow');
	});
	
	$('.minus-icon').click(function(){
		$(this).next('.tooltip-content-right').toggle();
	});
	
	$('.icon-star').click(function(){
		$(this).next('.tooltip-content').show();
	});
	
	$('.icon-file').click(function(){
		$(this).next('.tooltip-content-file').show();
	});
	
	$(document).on('click','.close-tooltip', function(){
		$(this).parents('.tooltip-content').hide();
	});
	
	$(document).on('click','.close', function(){
		$(this).parents('.tooltip-content-right').hide();
	});
	
	$(document).on('click','.circle-close', function(){
		$(this).parents('.tooltip-content-file').hide();
	});
	
	
	$('#accordion-collapse').find('.accordion-toggle').click(function(){
	
		//Expand or collapse this panel
		$(this).next().slideToggle('fast');

		//Hide the other panels
		$(".accordion-content").not($(this).next()).slideUp('fast');

	});
	
	
});