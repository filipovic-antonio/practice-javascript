const output = document.querySelector('.output');
output.style.width = '10rem';
output.style.heigth = '20rem';
output.textContent = 'hello world';
output.style.backgroundColor = 'gray';

output.addEventListener('mousedown', (e) => {
    message('green', e);
})
output.addEventListener('mouseover', (e) => {
    message('red', e);
})
output.addEventListener('mouseout', (e) => {
    message('yellow', e);
})
output.addEventListener('mouseup', (e) => {
    message('blue', e);
})

function message(color, event) {
    output.style.backgroundColor = color;
}