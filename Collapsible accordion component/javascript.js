const title =  document.querySelectorAll('.title');
const someOtherText = document.querySelectorAll('.myText');

title.forEach((el) => {
    el.addEventListener('click', (e) => {
        console.log(el.nextElementSibling);
        remover();
        el.nextElementSibling.classList.toggle('active');
    })
})

    function remover() {
        someOtherText.forEach((ele) => {
            ele.classList.remove('active');
        })
    }