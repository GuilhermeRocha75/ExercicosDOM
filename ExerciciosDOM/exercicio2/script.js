
document.addEventListener('DOMContentLoaded', () => {
    const inputText = document.getElementById('inputText');
    const displayButton = document.getElementById('displayButton');
    const outputText = document.getElementById('outputText');

    displayButton.addEventListener('click', () => {
        const text = inputText.value;
        outputText.textContent = text;
    });
});