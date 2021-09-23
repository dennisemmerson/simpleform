$(document).ready(function () {

	// GET REQUEST
	$("#deleteUsers").click(function (event) {
		event.preventDefault();
		deleteUsersFromDB();
	});


	// returns all users from the DB and makes a list of them in a div
	function deleteUsersFromDB() {
		fetch('/api/users/delete')
			.then(function (response) {
				return response.json();
			}).catch(error => console.log(error));
            $('#getResultDiv ul').empty();
	}


}); // end of file