const menuDesktop = document.querySelector('.inactive');
const menuEmail = document.querySelector('.navbar-email');

// SHOW AND HIDE MENU EMAIL
menuEmail.addEventListener('click', () => {
    console.log('click');
    menuDesktop.classList.toggle('inactive');
});