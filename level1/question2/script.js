// Grab data from API
fetch("https://jsonplaceholder.typicode.com/todos")
	.then(function (response) {
		return response.json();
	})
	.then(function (jsonObject) {
		createCards(jsonObject);
	})
	.catch(function (error) {
		console.error(error);
	});

// Creates the todo cards and populates them with the data from the API
function createCards(json) {
	// Get the container element for the todo cards
	const todoContainer = document.getElementById("todoContainer");

	// Dynamically create one card for each todo object in the json data
	json.forEach(todo => {
		// Create the 'assigned to' card header
		var userId = document.createElement("span");
		userId.innerText = "ASSIGNED TO: " + nameFromUserId(todo.userId);
		userId.className = "userId";

		// Create the card title
		var title = document.createElement("h4");
		title.innerText = todo.title;

		// Create task completion element
		var status = document.createElement("span");

		// Create the card itself
		var card = document.createElement("div");
		card.classList.add("card");

		// Sets card class and text based on task completion
		if (todo.completed) {
			card.classList.add("complete");
			status.innerText = "COMPLETED";
		}
		else {
			card.classList.add("incomplete");
			status.innerText = "NOT COMPLETED";
		}

		// Append the elements to eachother and the card to its container
		card.appendChild(userId);
		card.appendChild(title);
		card.appendChild(status);
		todoContainer.appendChild(card);
	});
}

// Returns user name from ID (mock data for the purposes of the assignment)
function nameFromUserId(userId) {

	switch (userId) {
		case 1:
			return "Mikkel Andersen";
			break;
		case 2:
			return "Gabe Newell";
			break;
		case 3:
			return "John Oliver";
			break;
		case 4:
			return "Elon Musk";
			break;
		case 5:
			return "Bill Gates";
			break;
		case 6:
			return "Michio Kaku";
			break;
		case 7:
			return "Stephen Colbert";
			break;
		case 8:
			return "Ryan Reynolds";
			break;
		case 9:
			return "Ryan Higa";
			break;
		case 10:
			return "Philip DeFranco";
			break;
		default:
			return "Unknown user";
			break;
	}

}