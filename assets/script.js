$(document).ready();

//*****show & hide************

	//*****layerOne************

	setTimeout(function() {
	    $('.layerOne').show();
	}, 100);

	setTimeout(function() {
	    $('.layerOne').hide();
	}, 1999); // <-- time in milliseconds

	//**********layerTwo*********

	setTimeout(function() {
	    $('.layerTwo').show();
	}, 2000);

	setTimeout(function() {
	    $('.layerTwo').hide();
	}, 3800); // <-- time in milliseconds

	//**********layerThree*********

	setTimeout(function() {
	    $('.layerThree').show();
	}, 3800);

	setTimeout(function() {
	    $('.layerThree').hide();
	}, 6000); // <-- time in milliseconds

	//*****layerFour************

	setTimeout(function() {
	    $('.layerFour').show();
	}, 6000);

	setTimeout(function() {
	    $('.layerFour').hide();
	}, 20000); // <-- time in milliseconds

	//*****layerFive************

	setTimeout(function() {
	    $('.layerFive').show();
	}, 20000);

	// setTimeout(function() {
	//     $('.layerFive').hide();
	// }, 25000); // <-- time in milliseconds


//***********Effects********************

	//**********layerTwo Effect*********
	setTimeout(function() {
	    $('#img-1').show();
	}, 2000);

	setTimeout(function() {
	    $('#img-2').show();
	}, 2200);

	setTimeout(function() {
	    $('#img-3').show();
	}, 2400);

	setTimeout(function() {
	    $('#img-4').show();
	}, 2600);

	setTimeout(function() {
	    $('#img-5').show();
	}, 2800);

	setTimeout(function() {
	    $('#img-6').show();
	}, 3000);

	setTimeout(function() {
	    $('#img-7').show();
	}, 3200);

	setTimeout(function() {
	    $('#img-8').show();
	}, 3400);

	setTimeout(function() {
	    $('#img-9').show();
	}, 3600);
	//**********End layerTwo Effect*********

	//**********layerThree Effect*********

	setTimeout(function() {
	    $('#imgB1').show();
	}, 4400);

	setTimeout(function() {
	    $('#imgB2').show();
	}, 4700);

	setTimeout(function() {
	    $('#imgB3').show();
	}, 4400);

	setTimeout(function() {
	    $('#imgB4').show();
	}, 4550);

	setTimeout(function() {
	    $('#imgB5').show();
	}, 4350);

	setTimeout(function() {
	    $('#imgB6').show();
	}, 4550);

	setTimeout(function() {
	    $('#imgB7').show();
	}, 4200);

	setTimeout(function() {
	    $('#imgB8').show();
	}, 4500);

	setTimeout(function() {
	    $('#imgB9').show();
	}, 4250);

	//**********End layerThree Effect*********


	//***********layerFour***********
		// Effect A***********

		$("#box-one > div:gt(0)").hide();
		setInterval(function() { 
		  $('#box-one > div:first')
		    .fadeOut(100)
		    .next()
		    .slideDown(500)
		    .end()
		    .appendTo('#box-one');
		},  6200);	//time control between slides

		$("#box-three > div:gt(0)").hide();
		setInterval(function() { 
		  $('#box-three > div:first')
		    .fadeOut(100)
		    .next()
		    .slideDown(500)
		    .end()
		    .appendTo('#box-three');
		},  6200);	//time control between slides

		$("#box-five > div:gt(0)").hide();
		setInterval(function() { 
		  $('#box-five > div:first')
		    .fadeOut(100)
		    .next()
		    .slideDown(500)
		    .end()
		    .appendTo('#box-five');

		},  6000);	//time control between slides

		$("#box-seven > div:gt(0)").hide();
		setInterval(function() { 
		  $('#box-seven > div:first')
		    .fadeOut(100)
		    .next()
		    .slideDown(500)
		    .end()
		    .appendTo('#box-seven');

		},  6200);	//time control between slides

		$("#box-nine > div:gt(0)").hide();
		setInterval(function() { 
		  $('#box-nine > div:first')
		    .fadeOut(100)
		    .next()
		    .slideDown(500)
		    .end()
		    .appendTo('#box-nine');
		},  6200);	//time control between slides


		// Effect B ****************

		$("#box-two > div:gt(0)").hide();
		setInterval(function() { 
		  $('#box-two > div:first')
		    .fadeOut(500)
		    .next()
		    .fadeIn(500)
		    .end()
		    .appendTo('#box-two');
		},  6200);	//time control between slides

		$("#box-four > div:gt(0)").hide();
		setInterval(function() { 
		  $('#box-four > div:first')
		    .fadeOut(500)
		    .next()
		    .fadeIn(500)
		    .end()
		    .appendTo('#box-four');
		},  6200);	//time control between slides

		$("#box-six > div:gt(0)").hide();
		setInterval(function() { 
		  $('#box-six > div:first')
		    .fadeOut(500)
		    .next()
		    .fadeIn(500)
		    .end()
		    .appendTo('#box-six');
		},  6400);	//time control between slides

		$("#box-eight > div:gt(0)").hide();
		setInterval(function() { 
		  $('#box-eight > div:first')
		    .fadeOut(500)
		    .next()
		    .fadeIn(500)
		    .end()
		    .appendTo('#box-eight');
		},  6500);	//time control between slides
		//**********End layerFour Effect*********

		//**********layerFive Effect*********
	setTimeout(function() {
	    $('#jump1').show();
	}, 20500);

	setTimeout(function() {
	    $('#jump2').show();
	}, 20500);

	setTimeout(function() {
	    $('#jump3').show();
	}, 20500);

	setTimeout(function() {
	    $('#jump4').show();
	}, 21000);

	setTimeout(function() {
	    $('#jump5').show();
	}, 21000);

	setTimeout(function() {
	    $('#jump6').show();
	}, 21000);

	setTimeout(function() {
	    $('#jump7').show();
	}, 21500);

	setTimeout(function() {
	    $('#jump8').show();
	}, 21500);

	setTimeout(function() {
	    $('#jump9').show();
	}, 21500);
	//**********End layerFive Effect*********
