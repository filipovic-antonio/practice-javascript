const messageInput = document.getElementById('messageInput');
const button = document.querySelector('button');

messageInput.addEventListener('keydown', function(event) {
    if(event.key == 'Enter') {
        enterMessage();
    }
})

function enterMessage() {
    document.getElementById('messageOutput').innerHTML = messageInput.value;
    messageInput.value = '';
}




button.addEventListener('click', enterMessage);