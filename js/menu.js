const mobileView = window.matchMedia('(max-width: 767px)');
const openButton = document.querySelector('.menu-button');
const menu = document.querySelector('.menu-links');
const closeButton = menu.querySelector('button');
let activeMenuButton = document.querySelector('.menu-button');
let menuLinks = menu.querySelectorAll('a');

// When mobile menu is opened/closed, set active menu button to close/open button respectively
function switchMenuButton() {
  if (mobileView.matches) { //operate mobile menu only in mobile view
    menu.classList.toggle('show-menu');
    openButton.classList.toggle('menu-button');
    closeButton.classList.toggle('menu-button');
    activeMenuButton = openButton.classList.contains('menu-button') ? openButton : closeButton;
    activeMenuButton.addEventListener('click', switchMenuButton);
  }
}

// Clicking on menu button/links toggles mobile menu
addEventListeners([openButton, ...menuLinks], 'click', switchMenuButton);
