window.onload = build;
const myArray = ['Antonio', 'Taz', 'Abeke', 'Kaisen', 'Mirko', 'Kure'];

const inputText = document.getElementById('addFriend');
const addFriendButton = document.getElementById('addNew')
const output = document.getElementById('output');

function addNewFriend() {
    const newFriend = inputText.value;
    adder(newFriend, myArray.length, 0);
    myArray.push(newFriend);
    console.log(myArray);
}

function build() {
    myArray.forEach((item, index) => {
        adder(item, index, 0);
    });
}

function adder(name, index, counter) {
    const tr = document.createElement('tr');
    const td1 =  document.createElement('td');
    td1.textContent =index + 1;
    const td2 = document.createElement('td');
    td2.textContent = name;
    const td3 =  document.createElement('td');
    td3.textContent = counter;
    tr.append(td1);
    tr.append(td2);
    tr.append(td3);
    tr.onclick = () => {
        let val= Number(tr.lastChild.textContent);
        val++
        tr.lastChild.textContent = val;
    }
    output.appendChild(tr);
}
addFriendButton.addEventListener('click', addNewFriend);