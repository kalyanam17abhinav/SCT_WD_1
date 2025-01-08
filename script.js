document.addEventListener('DOMContentLoaded', () => {
    const ham = document.querySelector('.hamburger');
    const nav = document.querySelector('.navbar');
    const list = document.querySelector('.list');
    const items = document.querySelectorAll('.item');
    const home = document.querySelector('home');

    ham.addEventListener('click', () => {
        nav.classList.toggle('expand');
        list.classList.toggle('expand');
        // item.classList.toggle('expand');
        items.forEach((item) => {
            item.classList.toggle('expand');
        });
        home.classList.toggle('expand');
    });
});1