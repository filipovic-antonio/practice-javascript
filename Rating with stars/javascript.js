const stars = document.querySelectorAll('.star');
const output = document.querySelector('.output');

stars.forEach((star, index) => {
    star.starValue = (index + 1);
    star.addEventListener('click', starRate);
})

function starRate(e) {
    output.innerHTML = `You reated this  ${e.target.starValue} stars`
    stars.forEach((star, index) => {
        if(index < e.target.starValue) {
            star.classList.add('orange');
        } else {
            star.classList.remove('orange');
        }
    })
}