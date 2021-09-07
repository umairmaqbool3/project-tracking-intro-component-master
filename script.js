// const hamburger = document.getElementById('hamburger');
// const navUL = document.getElementById('nav-ul');

// hamburger.addEventListener('click', () => {
//     navUL.classList.toggle('show');
// });

const hamburger = document.getElementById('hamburger');
const { body } = document;

hamburger.addEventListener('click', e => {
	body.classList.toggle('show-nav');
});