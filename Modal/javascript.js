const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsShowModal = document.querySelectorAll('.show-modal');

const closeModal =  function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}
const openModal =  function() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

btnsShowModal.forEach((btn) => {
    btn.addEventListener('click',openModal)
})

btnCloseModal.addEventListener('click',closeModal);
overlay.addEventListener('click',closeModal);

document.addEventListener('keydown', function(e) {
    if(e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
       }
    }
);