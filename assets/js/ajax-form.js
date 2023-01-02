$(function() {

	// Get the form.
	var form = $('#contact-form');

	// Get the messages div.
	var formMessages = $('.ajax-response');

	// Set up an event listener for the contact form.
	$(form).submit(function(e) {
		// Stop the browser from submitting the form.
		e.preventDefault();

		// Serialize the form data.
		var formData = $(form).serialize();

		window.location.replace(`${$(form).attr('action')}?${formData}`);

		// Submit the form using AJAX.
		// $.ajax({
		// 	type: 'POST',
		// 	url: $(form).attr('action'),
		// 	data: formData
		// })
		// .done(function(response) {
		// 	// Make sure that the formMessages div has the 'success' class.
		// 	$(formMessages).removeClass('error');
		// 	$(formMessages).addClass('success');

		// 	// Set the message text.
		// 	$(formMessages).text(response);

		// 	// Clear the form.
		// 	$('#contact-form input,#contact-form textarea').val('');
		// 	window.location.replace("index.html#pricing");
		// })
		// .fail(function(data) {
		// 	// Make sure that the formMessages div has the 'error' class.
		// 	$(formMessages).removeClass('success');
		// 	$(formMessages).addClass('error');
		// 	// Set the message text.
		// 	if (data.responseText !== '') {
		// 		$(formMessages).append(data.responseText);
		// 	} else {
		// 		$(formMessages).text('Oops! An error occured and your message could not be sent.');
		// 	}
		// });
	});

});


// https://docs.google.com/forms/d/e/1FAIpQLSc8omlJqXoH7Jh1Pkr1CTdf85FxaRC1tzK7zVjjKk6sIWYTQQ/viewform?entry.1350630430=name&entry.368690256=contact&entry.1219977020=city


//https://docs.google.com/forms/d/e/1FAIpQLSc8omlJqXoH7Jh1Pkr1CTdf85FxaRC1tzK7zVjjKk6sIWYTQQ/viewform?entry.1350630430=name&entry.368690256=contact&entry.1219977020=city&emailAddress=email&entry.1999493534=Dr.%20J.J.%20MAGDUM%20COLLEGE%20OF%20ENGINEERING