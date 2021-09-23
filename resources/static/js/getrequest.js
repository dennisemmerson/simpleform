$(document).ready(function () {

	// GET REQUEST
	$("#allUsers").click(function (event) {
		event.preventDefault();
		getUsersFromDB();
	});


	// returns all users from the DB and makes a list of them in a div
	function getUsersFromDB() {
		fetch('/api/users/all')
			.then(function (response) {
				return response.json();
			})
			.then(function (myJson) {
				let userData = myJson;
				$('#getResultDiv ul').empty();
				$.each(userData, function (i, user) {
					$('#getResultDiv .list-group').append(user.firstname + " " + user.lastname + "<br>")
				});

			}).catch(error => console.log(error));
	}


}); // end of file