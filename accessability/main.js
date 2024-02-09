const content = document.getElementById('content');
const increaseTextBtn = document.getElementById('increase-text');
const decreaseTextBtn = document.getElementById('decrease-text');
const textColorBtn = document.getElementById('text-color');
const backgroundColorBtn = document.getElementById('background-color');

let fontSize = 16; // Initial font size

increaseTextBtn.addEventListener('click', () => {
  fontSize += 2;
  content.style.fontSize = fontSize + 'px';
});

decreaseTextBtn.addEventListener('click', () => {
  fontSize -= 2;
  content.style.fontSize = fontSize + 'px';
});

textColorBtn.addEventListener('click', () => {
  // Use a color picker library or prompt the user for a color
  const newColor = prompt('Enter a new text color (e.g., red, #ff0000):');
  content.style.color = newColor;
});

backgroundColorBtn.addEventListener('click', () => {
  // Use a color picker library or prompt the user for a color
  const newColor = prompt('Enter a new background color (e.g., blue, #0000ff):');
  content.style.backgroundColor = newColor;
});
