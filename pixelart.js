const grid = document.getElementById('grid');
const colorPicker = document.getElementById('colorPicker');
const clearButton = document.getElementById('clearGrid');
let drawing = false;

// Function to create a grid of specified size
function createGrid(size) {
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  grid.innerHTML = ''; // Clear existing grid

  const totalPixels = size * size;
  for (let i = 0; i < totalPixels; i++) {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    grid.appendChild(pixel);
  }
}

// Event listeners for drawing
grid.addEventListener('mousedown', (e) => {
  if (e.target.classList.contains('pixel')) {
    drawing = true;
    e.target.style.backgroundColor = colorPicker.value;
  }
});

grid.addEventListener('mousemove', (e) => {
  if (drawing && e.target.classList.contains('pixel')) {
    e.target.style.backgroundColor = colorPicker.value;
  }
});

document.addEventListener('mouseup', () => (drawing = false));

// Clear grid button functionality
clearButton.addEventListener('click', () => createGrid(16));

// Initialize grid
createGrid(16);
