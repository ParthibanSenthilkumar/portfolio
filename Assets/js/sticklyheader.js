// <!------=====  STICKY HEADER SCRIPT START  ======----->

    (function ($) {
"use strict";
  	$(window).on('scroll',function(){
	    if($(this).scrollTop() > 100){
	    	$('header').addClass('sticky');
		}
		else{
		   $('header').removeClass('sticky');
		}
	});
	$(document).on('click', '.navbar-collapse.in', function (e) {
        if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
            $(this).collapse('hide');
        }
    });
   
})(jQuery);


// <!------=====  STICKY HEADER SCRIPT End======----->