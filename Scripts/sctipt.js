let notes = [
	{
		id: 1,
		text: "lorem ipsum..."
	},
	{
		id: 2,
		text: "some text for testing"
	},
	{
		id: 3,
		text: "hey yo"
	},
	{
		id: 4,
		text: "I think JS is better than other languages"
	},
]

function addText(arr) {
	for (let el of arr) {
		let myDiv = document.createElement("div");
		myDiv.innerText = el.text;
		myDiv.setAttribute("class", "content-text__block");

		let buttonsDiv = document.createElement("div");
		buttonsDiv.setAttribute("class", "content-buttons__block");
		myDiv.append(buttonsDiv);

		myDiv.innerHTML += `<div class="content-buttons__block">
			<img src="./Images/ok.ico" alt="Nothing">
			<img src="./Images/pencil.ico" alt="Nothing">
			<img src="./Images/delete.ico" alt="Nothing">
		</div>`

		content.append(myDiv);
	}
}

addText(notes);