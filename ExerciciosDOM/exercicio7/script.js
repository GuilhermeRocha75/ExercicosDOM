function adicionarTexto() {
    var texto = document.getElementById("textoInput").value;
    if (texto.trim() !== "") {

        var novoItem = document.createElement("li");
        novoItem.textContent = texto;
        document.getElementById("lista").appendChild(novoItem);
        document.getElementById("textoInput").value = "";
    } else {
        alert("Por favor, digite algo antes de adicionar à lista.");
    }
}
