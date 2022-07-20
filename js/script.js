// function draw() {
//   gridContainer.replaceChildren();
//   for (let i = 0; i < Number(gridValue) * Number(gridValue); i++) {
//     let grid = document.createElement('div');
//     grid.classList.add('cell');
//     grid.addEventListener('mouseover', (e) => {
//       e.target.setAttribute('style', 'background-color:black;');
//     });
//     gridContainer.appendChild(grid);
//   }
//   gridContainer.style.gridTemplateColumns = `repeat(${gridValue}, auto)`;
//   gridContainer.style.gridTemplateRows = `repeat(${gridValue}), auto)`;
// }

// function buttonToggle() {
//   if (rainbowButton.value == 'Rainbow Mode : OFF') {
//     rainbowButton.value = 'Rainbow Mode : ON';
//     const getRandomNumber = (maxNum) => {
//       return Math.floor(Math.random() * maxNum);
//     };
//     const getRandomColor = () => {
//       const h = getRandomNumber(360);
//       const s = getRandomNumber(100);
//       const l = getRandomNumber(100);

//       return `hsl(${h}deg, ${s}%, ${l}%)`;
//     };

//     const randomColorPick = getRandomColor();
//     return randomColorPick;
//   } else if (rainbowButton.value == 'Rainbow Mode : ON') {
//     rainbowButton.value = 'Rainbow Mode : OFF';
//   }
// }

// let randomColor = buttonToggle();

const gridContainer = document.querySelector('.grid-container');
const rowToot = document.getElementById('sizeSlider');
const colorPicker = document.getElementById('colorPicker');
const sliderValue = document.getElementById('sliderValue');
const clearButton = document.querySelector('.clear-button');
const rainbowButton = document.querySelector('.rainbow-button');

let gridValue = 0;

rowToot.oninput = () => {
  sliderValue.innerText = rowToot.value + 'x' + rowToot.value;
  gridValue = rowToot.value;
  console.log(gridValue);
};

let colorPicked = '#000000';

function watchColorPicker(e) {
  colorPicked = e.target.value;
  console.log(colorPicked);
}

colorPicker.addEventListener('change', watchColorPicker, false);

clearButton.addEventListener('click', () => {
  const removeCells = document.querySelectorAll('.cell');
  for (let i = 0; i < removeCells.length; i++) {
    removeCells[i].style.backgroundColor = '';
  }
});

function createGrid() {
  gridContainer.replaceChildren();
  for (let i = 0; i < Number(gridValue) * Number(gridValue); i++) {
    let grid = document.createElement('div');
    grid.classList.add('cell');
    gridContainer.appendChild(grid);
  }
  gridContainer.style.gridTemplateColumns = `repeat(${gridValue}, auto)`;
  gridContainer.style.gridTemplateRows = `repeat(${gridValue}), auto)`;
}

rowToot.onchange = () => {
  createGrid();
  const getCells = document.querySelectorAll('.cell');

  for (let i = 0; i < getCells.length; i++) {
    getCells[i].addEventListener('mouseover', () => {
      getCells[i].style.backgroundColor = colorPicked;
    });
  }
};
