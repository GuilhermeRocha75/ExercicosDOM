function aumentar() {
    const img = document.getElementById('imagem');
    const larguraAtual = img.clientWidth;
    img.style.width = (larguraAtual + 10) + 'px';
}

function diminuir() {
    const img = document.getElementById('imagem');
    const larguraAtual = img.clientWidth;
    img.style.width = (larguraAtual - 10) + 'px';
}
