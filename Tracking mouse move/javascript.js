const el = document.querySelector('.holder');

el.addEventListener('mouseover', (e) => {
    e.target.classList.add('active');
})
el.addEventListener('mouseout', (e) => {
    e.target.classList.remove('active');
})
el.addEventListener('mousemove', coordination);

function coordination(e) {
    let html =  e.clientX + e.clientY;
    document.querySelector('.output').innerHTML = html;
}