$(document).ready(function () {
	'use strict'


	// VALIDATE THE USER INPUT ON THE FORM
	$(".needs-validation").validate({
		errorClass: "is-invalid",
		rules: {
			firstname: {
				required: true,
				minlength: 3
			},
			lastname: {
				required: true,
				minlength: 3
			},
		},

	});


	// SUBMIT FORM
	$("#userForm").submit(function (event) {
		event.preventDefault();
		sendFormDataToDB();
	});


	// SEND THE FORM DATA TO THE DB THEN CLEAR THE FORM
	async function sendFormDataToDB() {

		// PREPARE FORM DATA
		var formData = {
			firstname: $("#firstname").val(),
			lastname: $("#lastname").val()
		}


		postData(window.location + "api/users/save", formData)
			.then(data => console.log(JSON.stringify(data)))
			.catch(error => console.error(error));



		function postData(url = ``, data = {}) {
			return fetch(url, {
				method: "POST",
				mode: "cors",
				cache: "no-cache",
				credentials: "same-origin",
				headers: {
					"Content-Type": "application/json"
				},
				redirect: "follow",
				referrer: "no-referrer",
				body: JSON.stringify(data)
			})
				.then(response => response.json()); // parses response to JSON
		}
		resetDataOnForm();
	}

	// clear the content on the form after submission
	function resetDataOnForm() {
		$("#firstname").val("");
		$("#lastname").val("");
	}
})