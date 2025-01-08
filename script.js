const ham = document.getElementsByClassName('hamburger')[0];
const nav = document.getElementsByClassName('navbar')[0];
const list = document.getElementsByClassName('list')[0];
const item = document.getElementsByClassName('item');

ham.addEventListener('click', () => {
    nav.classList.toggle('expand');
    list.classList.toggle('expand');
    for (let i = 0; i < item.length; i++) {
        item[i].classList.toggle('expand');
    }
})