const checkbox = document.getElementById('checkbox');
const mensagem = document.getElementById('mensagem');

checkbox.addEventListener('change', function() {
    if (this.checked) {
        mensagem.textContent = 'Checkbox marcada';
    } else {
        mensagem.textContent = 'Checkbox desmarcada';
    }
});
