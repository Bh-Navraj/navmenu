
$(document).ready(function(){	

	// nav-toggle click function
	var site = $('body');
	var overlay = $('<div class="body-overlay"></div>');

	$('.nav-toggle').on('click', function() {
		$('.nav-close').show();
		$('.nav-container').toggleClass('navopen');
		$('.nav-close').toggleClass('nav-btnopen'); 
		site.prepend(overlay);
	});
	$('body').on('click','.nav-close', function(){
		$('.nav-container').removeClass('navopen');
		$(this).toggleClass('nav-btnopen');
		$('.body-overlay').remove();
	});  
	$('.drop-menu i').on('click', function() {
		$(this).next().next().toggleClass('show');
		$(this).toggleClass('deg180');
	});

})