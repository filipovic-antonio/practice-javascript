const output = document.querySelector('.output');

const firstInput = document.querySelector("input[name='first']");
const secondInput = document.querySelector("input[name='last']");

firstInput.addEventListener('change', (e) => {
    console.log('change');
    update(firstInput.value);
});
firstInput.addEventListener('blur', (e) => {
    console.log('blur');
});
firstInput.addEventListener('focus', (e) => {
    console.log('focus');
});

secondInput.addEventListener('change', (e) => {
    console.log('change');
    update(secondInput.value);
});
secondInput.addEventListener('blur', (e) => {
    console.log('blur');
});
secondInput.addEventListener('focus', (e) => {
    console.log('focus');
});


function update(str) {
    output.textContent = str;
};