const createGrid = (gridCells) => {
  grid.style.gridTemplateRows = `repeat(${gridCells}, 1fr)`;
  grid.style.gridTemplateColumns = `repeat(${gridCells}, 1fr)`;

  for (let r = 0; r < gridCells; r++) {
    for (let c = 0; c < gridCells; c++) {
      const child = document.createElement('div');
      child.addEventListener('mouseover', (e) => {
        e.target.classList.add('fill');
      });
      grid.appendChild(child);
    }
  }
};

createGrid(gridCells);