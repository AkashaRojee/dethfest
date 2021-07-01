const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.menu-links');

function detect() {
  console.log('menu');
  menu.classList.toggle('show-menu');
}

menuButton.addEventListener('click', detect);