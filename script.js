const nav = document.querySelector('.navbar');

document.addEventListener('DOMContentLoaded', () => {
    const ham = document.querySelector('.hamburger');
    const list = document.querySelector('.list');
    const items = document.querySelectorAll('.item');
    const home = document.querySelector('home');

    ham.addEventListener('click', () => {
        nav.classList.toggle('expand');
        list.classList.toggle('expand');
        items.forEach((item) => {
            item.classList.toggle('expand');
        });
        home.classList.toggle('expand');
    });
});

window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
})