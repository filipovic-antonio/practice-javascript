const output = document.querySelector('.output');
const message = document.querySelector('.message');
message.textContent = 'Click red cointener to start!';

function ranNum(max) {
    return Math.floor(Math.random() * max);
}
const box = document.createElement('div');
const game = {
    start: null,
    timer: 0
};
box.classList.add('box')
output.append(box);

box.addEventListener('click', (e) => {
    box.textContent = '';
    box.style.display = 'none';
    game.timer = setTimeout(addBox, ranNum(3000));
    if(!game.start) {
        message.textContent = 'Loading....'
    } else {
        const cur = new Date().getTime();
        const dur = (cur - game.start) / 1000;
        message.textContent = `Its took ${dur} seconds to click.`
    }
})

function addBox() {
    message.textContent = 'Click it';
    game.start = new Date().getTime();
    box.style.display = 'block';
    box.style.left = ranNum(450) + 'px';
    box.style.top = ranNum(450) + 'px';
}
