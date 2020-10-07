function addNewList() {
    alert('hi class!');
    console.log('hi class!');
}

function deleteListItem(element) {
    element.parentNode.removeChild(element);
}

function finishItem(element) {
    if(element.checked) {
        element.parentNode.style.textDecoration = "line-through";
    }
    else {
        element.parentNode.style.textDecoration = "none";
    }
}

// https://techstacker.com/how-to-enable-and-disable-buttons-with-javascript/
function inputValidation(value) {
    const myButton = document.getElementById('add-new-item-button');
    // console.log(value);
    if(value === "") {
        myButton.disabled = true; 
    }
    else {
        myButton.disabled = false;
    }
}

function addListItem() {
    const itemText = document.getElementById('new-item-text');
    const list = document.getElementById('grocery-list');
    // console.log('grocery list', list);
    
    // console.log(itemText);
    const newItem = document.createElement('li');
    newItem.appendChild(document.createTextNode(itemText.value));
    list.appendChild(newItem);
}