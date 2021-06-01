const container = document.querySelector('.container');
const squareInput = document.querySelector('.square-amount');
const form = document.querySelector('.form');

let squareSize = 16;

const renderGame = () => {
	for (let i = 0; i < squareSize; i++) {
		const row = document.createElement('div');
		row.classList.add('row');

		for (let j = 0; j < squareSize; j++) {
			const column = document.createElement('div');
			column.classList.add('row-div');

			row.appendChild(column);
			container.appendChild(row);
		}
	}

	const columnDivs = document.querySelectorAll('.row-div');
	columnDivs.forEach(square => {
		square.addEventListener('mouseover', () => {
			square.style.backgroundColor = generateRandomColor();
		});
	});
};

const generateRandomColor = () =>
	//random color will be freshly served
	`#${Math.floor(Math.random() * 16777215).toString(16)}`;

renderGame();

form.addEventListener('submit', e => {
	e.preventDefault();

	const input = Number(squareInput.value);
	if (input === '') return;
	container.innerHTML = '';
	squareSize = input;
	squareInput.value = '';
	renderGame();
});
