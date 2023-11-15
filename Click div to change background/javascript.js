const divs = document.querySelectorAll('div');

divs.forEach((el) => {
    el.addEventListener('click', () => {
        document.body.style.backgroundColor = el.textContent;
    })
})