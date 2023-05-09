// variables menu desktop
const menuEmail = document.querySelector('.navbar-email');
const menuDesktop = document.querySelector('.desktop-menu');

// variables menu mobile
const burgerMenu = document.querySelector('.menu');
const menuMobile = document.querySelector('.mobile-menu');


// SHOW AND HIDE MENU EMAIL
menuEmail.addEventListener('click', () => {
    console.log('click');
    menuDesktop.classList.toggle('inactive');
});

// SHOW AND HIDE BURGUER MENU MOBILE
burgerMenu.addEventListener('click', () => {
    console.log('burguer');
    menuMobile.classList.toggle('inactive');
});

