addNewList = () => {
    alert('hello world with arrow!');
    console.log('hello world!');
}

addListItem = () => {
    const list = document.getElementById('grocery-list');
    const inputField = document.getElementById('new-list-item');
    const newItem = document.createElement('li');
    newItem.appendChild(document.createTextNode(inputField.value));
    list.appendChild(newItem);
}

deleteListItem = (element) => {
    element.parentNode.removeChild(element);
}

completeListItem = (element) => {
    console.log(element);
    if(element.checked) {
        element.parentNode.style.textDecoration = "line-through";
    }
    else {
        element.parentNode.style.textDecoration = "none";
    }
}