const ham = document.querySelector('.hamburger');
const nav = document.querySelector('.navbar');
const list = document.querySelector('.list');
const items = document.querySelectorAll('.item');

ham.addEventListener('click', () => {
    nav.classList.toggle('expand');
    list.classList.toggle('expand');
    items.forEach((item) => {
        item.classList.toggle('expand');
    });
});