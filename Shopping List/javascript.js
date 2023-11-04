const addItem =  document.getElementById('addNew'); 
const deleteList = document.getElementById('deleteList');

const addItemToList = () => {
    let inputText = document.getElementById('addItem').value;
    if(inputText === '') {
        alert("Please write some Shopping list!");
    } else {
    let li = document.createElement('li');
    li.classList.add('li');
    li.appendChild(document.createTextNode(inputText));
    document.getElementById('sList').appendChild(li);
    document.getElementById('addItem').value = '';
    }
}

const deleteAllList = () => {
    const sList = document.getElementById('sList');
    sList.innerHTML = ''; 
}

addItem.addEventListener('click', addItemToList)
deleteList.addEventListener('click', deleteAllList);