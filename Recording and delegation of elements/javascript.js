const main = document.querySelector('.container');
const boxes =  document.querySelectorAll('.box');

main.addEventListener('click', (e) => {
    console.log('4');
}, false);

main.addEventListener('click', (e) => {
    console.log('1');
}, true);

boxes.forEach(el => {
    el.addEventListener('click', (e) => {
        console.log('3');
        console.log(e.target.textContent);
    }, false)

    el.addEventListener('click', (e) => {
        console.log('2');
        console.log(e.target.textContent);
    }, true);
});