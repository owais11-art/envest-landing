console.log('hello')


const toggler = document.querySelector('.nav__container__toggler');

const cancel = document.querySelector('.side-nav__container__cancel');

const sideBar = document.querySelector('.side-nav');

console.log('hello');

toggler.addEventListener('click', () => {
    sideBar.classList.add('active');
});

cancel.addEventListener('click', () => {
    sideBar.classList.remove('active');
});