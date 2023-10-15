const form = document.querySelector('form');
const tableBody = document.querySelector('tbody');
const buttonDelete = document.querySelector('table');

function addExpanse(event){
    event.preventDefault();
    const name = document.getElementById('nameText').value;
    const date = document.getElementById('date').value
    const amount = document.getElementById('amount').value;

    tableBody.innerHTML += `
        <tr>
            <td>${name}</td>
            <td>${date}</td>
            <td>${amount}</td>
            <td><button type='onclick' id="buttonDelete">Delete</button></td>
        </tr>
    `;
    tableBody.classList.add('tableBodyStyle');
}
function rowDelete(event){
    const button = event.target;
    button.closest('tr').remove();
}

buttonDelete.addEventListener('click', rowDelete);
form.addEventListener('submit', addExpanse);