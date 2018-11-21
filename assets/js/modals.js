	var modal = document.getElementById('.modal');

	window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = "hidden";
		}
	}
	
	
	
	
	
	
	
	$(window).scroll(function() {
	// 100 = The point you would like to fade the nav in.

	if ($(window).scrollTop() > 1 ){

	$('.navbar-default').addClass('show');

	} else {

	$('.navbar-default').removeClass('show');

	};   	
	});

	
	
	
	
	$('.scroll').on('click', function(e){		
	e.preventDefault()

	$('html, body').animate({
	scrollTop : $(this.hash).offset().top
	}, 1500);
	});


	$( document ).ready(function() {
		$('.triggerSA').on('click', function() {
			$('.modal-wrapperSA').toggleClass('open');
			$('.page-wrapper').toggleClass('blur-it');
			return false;
			});
		}
	);