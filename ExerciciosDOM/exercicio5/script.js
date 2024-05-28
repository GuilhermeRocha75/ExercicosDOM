const button = document.getElementById('remove-button');
const itemList = document.getElementById('item-list');

button.addEventListener('click', function() {

    while (itemList.firstChild) {
        itemList.removeChild(itemList.firstChild);
    }
});


