const openButton = document.querySelector('.menu-button');
const menu = document.querySelector('.menu-links');
const closeButton = menu.querySelector('button');
let activeMenuButton = document.querySelector('.menu-button');

// When mobile menu is opened/closed, set active menu button to close/open button respectively
function switchMenuButton() {
  console.log('menu');
  menu.classList.toggle('show-menu');
  openButton.classList.toggle('menu-button');
  closeButton.classList.toggle('menu-button');
  activeMenuButton = openButton.classList.contains('menu-button') ? openButton : closeButton;
  activeMenuButton.addEventListener('click', switchMenuButton);
}

openButton.addEventListener('click', switchMenuButton);