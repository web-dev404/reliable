const html = document.querySelector('html'),
    checkbox = document.querySelector('.checkbox1'),
    burger = document.querySelector('.burger'),
    round = document.querySelector('.round'),
    headerMain = document.querySelector('.header__main');

checkbox.addEventListener('click', () => {
    checkbox.classList.toggle('active');
    html.classList.toggle('active');
    burger.classList.toggle('active');
    round.classList.toggle('active');
    headerMain.classList.toggle('active');
});