const incrementButton = document.getElementById('incrementButton');
const counterParagraph = document.getElementById('counter');

let count = 0;
incrementButton.addEventListener('click', () => {
  count++;
  counterParagraph.textContent = count;
});
