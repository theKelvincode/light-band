const openMenu = document.getElementById('hamBtn');
const mainMenu = document.querySelector('.mainMenu');

const switcher = function () {
  mainMenu.classList.toggle('open');
}

openMenu.addEventListener('click', switcher)