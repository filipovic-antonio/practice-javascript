const output = document.querySelector('.output');
const myInput = document.querySelector('input[name="message"]')
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const log = [];

btn1.addEventListener('click', tracker);
btn2.addEventListener('click', tracker);
btn3.addEventListener('click', (e) => {
    console.log(log);
})

function tracker(e) {
    output.textContent = myInput.value;
    const ev = e.target;
    console.dir(ev);
    const temp = {
        message: myInput.value,
        type: ev.type,
        class:ev.className,
        tag: ev.tagName
    };
    log.push(temp);
    myInput.value = '';
}