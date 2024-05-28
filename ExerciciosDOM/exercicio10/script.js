function reverterLista() {
    var lista = document.getElementById("listaItens");
    var itens = lista.getElementsByTagName("li");
    var itensArray = Array.prototype.slice.call(itens);

    itensArray.reverse();
  
    while (lista.firstChild) {
      lista.removeChild(lista.firstChild);
    }

    itensArray.forEach(function(item) {
      lista.appendChild(item);
    });
  }
  