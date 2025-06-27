'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

//function stored i a variable for openModal
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
//function stored i a variable for closeModal
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal); 
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

//bttn click for ESC

document.addEventListener('keydown', function (e) {
  console.log(e.key);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    // if (!modal.classList.contains('hidden')) {
    closeModal();
  }
});
