const button = document.getElementById('add');
const remove = document.getElementById('remove');
const input = document.getElementById('userInput');
const ul = document.querySelector('ul');
const emptyList = document.querySelector('h2');

// checking length of input
function inputLength() {
	return input.value.length;
}
// Check how many li elements exist
function checkList() {
	return document.getElementsByTagName('li').length;
}

function createListElement() {
	const li = document.createElement('li');
	li.classList.add('item');
	li.appendChild(document.createTextNode(input.value));
	li.addEventListener('click', toggleDone);
	ul.appendChild(li);
	input.value = '';

	// Toggle line-through on click
	function toggleDone() {
		li.classList.toggle('done');
	}
	// Create delete button, style it and append it to li
	const createDeleteBtn = document.createElement('button');
	const deleteBtn = document.createElement('i');
	deleteBtn.classList.add('deleteBtn');
	deleteBtn.classList.add('fas', 'fa-times');
	createDeleteBtn.appendChild(deleteBtn);
	deleteBtn.addEventListener('click', deleteItem);
	li.append(deleteBtn);

	// Hide empty list text if li's exist
	if (checkList() > 0) {
		const emptyList = document.querySelector('h2');
		emptyList.style.display = 'none';
	}

	// Delete item
	function deleteItem() {
		li.remove();
		if (checkList() == 0) {
			const emptyList = document.querySelector('h2');
			emptyList.style.display = 'block';
		}
	}
}

button.addEventListener('click', function() {
	if (inputLength() > 0) {
		createListElement();
	}
});

input.addEventListener('keypress', function(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
});
