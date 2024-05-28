
const adicionarItemBtn = document.getElementById('adicionarItemBtn');
const minhaLista = document.getElementById('minhaLista');

function adicionarItem() {

    const novoItem = document.createElement('li');
    novoItem.textContent = 'Novo Item';
    minhaLista.appendChild(novoItem);
}

adicionarItemBtn.addEventListener('click', adicionarItem);
