(function(){
	let inputBoxes = [];

	function matchPersons(persons) {
		let	giftees = persons.slice(0);
		let matchedPersons = {};
		let random;
		persons.forEach((person) => {
			do
				random = randomNumberBetween(giftees.length);
			while (giftees[random] === person)
			matchedPersons[person] = giftees[random];
			giftees.splice(random, 1);
		});
		return matchedPersons;
	}

	function randomNumberBetween(digits) {
		return Math.floor(Math.random() * digits);
	}

	function randomThreeDigits() {
		return Math.floor(Math.random() * 1000);
	}

	function addPerson() {
		let box;
		do
			box = randomThreeDigits();
		while (inputBoxes.hasOwnProperty(box))
		inputBoxes.push(box);
		$("#inputs").append("<div id='" + box + "'><input type='text' value='" + box + "'><button type='button' class='delete-box' id='b" + box + "'>X</button></div>");
		$("#b" + box).on('click', deleteBox);
	}

	Array.prototype.deleteBox = function (event) {
		let id = $(event.target).parent().attr('id');
		let box = this.indexOf(id);
		$('#' + id).remove();
		this.splice(box, 1);
	}

	function submit() {
		let persons = [];
		inputBoxes.forEach((element) => {
			let id = $('#' + element);
			persons.push(id.val() || element);
			id.addClass('hidden');
		});
		$("#submit").addClass('hidden');
		$("#add-person").addClass('hidden');
		console.log(matchPersons(persons));
	}

	addPerson();
	addPerson();
	$("#submit").on('click', submit);
	$("#add-person").on('click', addPerson);

})();
