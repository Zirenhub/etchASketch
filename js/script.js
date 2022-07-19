const gridContainer = document.querySelector('.grid-container');
const rowToot = document.getElementById('sizeSlider');
const sliderValue = document.getElementById('sliderValue');

let gridValue = 0;

rowToot.oninput = () => {
  sliderValue.innerText = rowToot.value + 'x' + rowToot.value;
  gridValue = rowToot.value;
  console.log(gridValue);
};

rowToot.onchange = () => {
  gridContainer.replaceChildren();
  for (let i = 0; i < Number(gridValue) * Number(gridValue); i++) {
    let grid = document.createElement('div');
    grid.classList.add('cell');
    grid.addEventListener('mouseover', (e) => {
      e.target.setAttribute('style', 'background-color:black;');
    });
    gridContainer.appendChild(grid);
  }
  gridContainer.style.gridTemplateColumns = `repeat(${gridValue}, auto)`;
  gridContainer.style.gridTemplateRows = `repeat(${gridValue}), auto)`;
};
